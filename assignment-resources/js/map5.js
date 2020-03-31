function googleMap () {
  var map = new google.maps.Map(document.getElementById('map5'), {
    zoom: 4,
    center: { lat: 39, lng: -98 },
    mapTypeId: 'terrain',
    gestureHandling: 'greedy'
  })
  map.data.loadGeoJson('https://geog4046.github.io/assignment-resources/data/us_state_demographics_ESRI_2010A.geojson')
  var createSymbology = function (feature) {
    var stateAge = feature.getProperty('MED_AGE')
    var stateColor = 'olive'
    if (stateAge < 38) {
      stateColor = 'green'
    }
    return {
      fillColor: stateColor,
      strokeColor: stateColor,
      strokeWeight: 1,
      fillOpacity: 0.65
    }
  }
  map.data.setStyle(createSymbology)
  var infowindow = new google.maps.InfoWindow()
  map.data.addListener('click', function (event) {
    infowindow.setOptions({
      content: 'The median age of ' + event.feature.getProperty('STATE_NAME') + ' is ' + event.feature.getProperty('MED_AGE') + '<br>National median: 38',
      position: event.latLng
    })
    infowindow.open(map)
  })
}
