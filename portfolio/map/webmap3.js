function init () {
  let demoMap = L.map('map3').setView([39, -98], 4)
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}').addTo(demoMap)
  let geojsonUrl = 'https://geog4046.github.io/portfolio/data/us_state_demographics_ESRI_2010A.geojson'
  // jQuery.getJSON(geojsonUrl, function (data) {
  //   L.geoJSON(data, { style: { color: 'green' } }).addTo(demoMap)
  // })
  jQuery.getJSON(geojsonUrl, function (geojsonData) {
    L.geoJSON(geojsonData, {
      style: createSymbology,
      onEachFeature: createPopup
    }).addTo(demoMap)
  })

  let createSymbology = function (feature) {
    let stateAge = feature.properties.MED_AGE
    let stateColor = 'Olive'
    if (stateAge < 38) {
      stateColor = 'Green'
    }
    return {
      color: stateColor,
      weight: 1,
      fillOpacity: 0.2
    }
  }
  let createPopup = function (feature, layer) {
    let stateName = feature.properties.STATE_NAME
    let stateAge = feature.properties.MED_AGE
    layer.bindPopup('The median age of ' + stateName + ' is ' + stateAge + '<br>National median: 38')
  }
}
window.addEventListener('load', init)
