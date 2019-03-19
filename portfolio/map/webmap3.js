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
    let age = feature.properties.MED_AGE
    let color = 'Olive'
    if (age < 38) {
      color = 'Green'
    }
    return {
      color: color,
      weight: 1,
      fillOpacity: 0.2
    }
  }
  let createPopup = function (feature, layer) {
    let name = feature.properties.STATE_NAME
    let age = feature.properties.MED_AGE
    layer.bindPopup('The median age of ' + name + ' is ' + age + '<br>National median: 38')
  }
}
window.addEventListener('load', init)
