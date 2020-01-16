function init () {
  // var map4 = L.Wrld.map('map4', 'e65117ae7fb552545c72547b0314b47d')
  var map4 = L.Wrld.map('map4', 'e65117ae7fb552545c72547b0314b47d', {
    center: [29.95, -90.07],
    zoom: 15
  })
  map4.themes.setWeather(L.Wrld.themes.weather.Clear)
  map4.themes.setTime(L.Wrld.themes.time.Day)
  var geojsonUrl = 'https://opendata.arcgis.com/datasets/3273a5f8334d40838681ff0337eddb8c_0.geojson'
  // jQuery.getJSON(geojsonUrl, function (geojsonData) {
  //   L.geoJSON(geojsonData).addTo(map4)
  // })
  jQuery.getJSON(geojsonUrl, function (geojsonData) {
    L.geoJSON(geojsonData, {
      onEachFeature: createPopup
    }).addTo(map4)
  })
  var createPopup = function (feature, layer) {
    layer.bindPopup(feature.properties.NAME)
  }
  jQuery('#jackson-square').on('click', function () {
    map4.setView([29.957, -90.063], 17, {
      headingDegrees: -45,
      animate: true,
      durationSeconds: 3
    })
  })
  jQuery('#lafayette-square').on('click', function () {
    map4.setView([29.949, -90.07], 17, {
      headingDegrees: 0,
      animate: true,
      durationSeconds: 3
    })
  })
}
window.addEventListener('load', init)
