function init () {
  var map = L.map('map').setView([30, -90], 8)
  var grayBasemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}').addTo(map)
  var streetsBasemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}').addTo(map)
  var csv = 'https://docs.google.com/spreadsheets/d/1KOWaSFXDdFWcpzoS7snfHdEGQ9NWS19zP-0KEVLO4DM/gviz/tq?tqx=out:csv&sheet=Sheet1'
  var statesLayer = L.layerGroup().addTo(map)
  // jQuery.getJSON(geojsonUrl, function (data) {
  //   L.geoJSON(data, { style: { color: 'green' } }).addTo(map3)
  // })
  jQuery.getJSON(geojsonUrl, function (geojsonData) {
    L.geoJSON(geojsonData, {
      style: createSymbology,
      onEachFeature: onEachFeature
    }).addTo(map3)
  })

}
window.addEventListener('load', init)
