function init () {
  let demoMap = L.map('map3').setView([39, -98], 4)
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}').addTo(demoMap)
  let geojsonUrl = 'top50.geojson'
  jQuery.getJSON(geojsonUrl, function (geojsonData) {
    L.geoJSON(geojsonData, {
      onEachFeature: createPopup
    }).addTo(demoMap)
  })
  let createPopup = function (feature, layer) {
    let stateName = feature.properties.City
    let stateAge = feature.properties.Census2010
    layer.bindPopup('The population of ' + stateName + ' is ' + stateAge + '.')
  }
}
window.addEventListener('load', init)
