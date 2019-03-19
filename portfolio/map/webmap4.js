function init () {
  // let demoMap = L.Wrld.map('map4', 'e65117ae7fb552545c72547b0314b47d')
  let demoMap = L.Wrld.map('map4', 'e65117ae7fb552545c72547b0314b47d', {
    center: [29.95, -90.07],
    zoom: 15
  })
  demoMap.themes.setWeather(L.Wrld.themes.weather.Clear)
  demoMap.themes.setTime(L.Wrld.themes.time.Day)
  let geojsonUrl = 'https://opendata.arcgis.com/datasets/3273a5f8334d40838681ff0337eddb8c_0.geojson'
  // jQuery.getJSON(geojsonUrl, function (geojsonData) {
  //   L.geoJSON(geojsonData).addTo(demoMap)
  // })
  jQuery.getJSON(geojsonUrl, function (geojsonData) {
    L.geoJSON(geojsonData, {
      onEachFeature: createPopup
    }).addTo(demoMap)
  })
  let createPopup = function (feature, layer) {
    layer.bindPopup(feature.properties.NAME)
  }
  jQuery('#jackson-square').on('click', function () {
    demoMap.setView([29.957, -90.063], 17, {
      headingDegrees: -45,
      animate: true,
      durationSeconds: 3
    })
  })
  jQuery('#lafayette-square').on('click', function () {
    demoMap.setView([29.949, -90.07], 17, {
      headingDegrees: 0,
      animate: true,
      durationSeconds: 3
    })
  })
}
window.addEventListener('load', init)
