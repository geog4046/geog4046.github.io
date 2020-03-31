function init () {
  var map3 = L.map('map3').setView([39, -98], 4)
  var grayBasemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}').addTo(map3)
  var streetsBasemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}').addTo(map3)
  var geojsonUrl = 'https://geog4046.github.io/assignment-resources/data/us_state_demographics_ESRI_2010A.geojson'
  var statesLayer = L.layerGroup().addTo(map3)
  // jQuery.getJSON(geojsonUrl, function (data) {
  //   L.geoJSON(data, { style: { color: 'green' } }).addTo(map3)
  // })
  jQuery.getJSON(geojsonUrl, function (geojsonData) {
    L.geoJSON(geojsonData, {
      style: createSymbology,
      onEachFeature: onEachFeature
    }).addTo(map3)
  })

  var createSymbology = function (feature) {
    var stateAge = feature.properties.MED_AGE
    var stateColor = 'Olive'
    if (stateAge < 38) {
      stateColor = 'Green'
    }
    return {
      color: stateColor,
      weight: 1,
      fillOpacity: 0.2
    }
  }
  var onEachFeature = function (feature, layer) {
    var stateName = feature.properties.STATE_NAME
    var stateAge = feature.properties.MED_AGE
    layer.bindPopup('The median age of ' + stateName + ' is ' + stateAge + '<br>National median: 38')
    statesLayer.addLayer(layer)
  }
  var basemaps = {
    'Streets': streetsBasemap,
    'Gray canvas': grayBasemap
  }

  // an object containing a list of operational layers
  var layers = {
    'Median age by state': statesLayer
  }

  L.control.layers(basemaps, layers).addTo(map3)
}
window.addEventListener('load', init)
