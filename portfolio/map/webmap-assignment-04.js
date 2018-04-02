function map4 () {
  // create a map object
  let mymap = L.map('map4').setView([39, -98], 4)
  mymap.on('click', function (event) {
    console.log('You clicked the map at ' + event.latlng)
  })
  // create basemap layer
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}').addTo(mymap)
  function myStyle (feature) {
    let age = feature.properties.MED_AGE
    let color = 'Olive'
    if (age < 38) {
      color = 'Green'
    }
    let myStyle = {
      color: color,
      weight: 1,
      fillOpacity: 0.2
    }
    return myStyle
  }
  function myPopup (feature, layer) {
    let name = feature.properties.STATE_NAME
    let age = feature.properties.MED_AGE
    layer.bindPopup('Median age of ' + name + ': ' + age + '<br>National average: 38')
  }
  let myOptions = {
    style: myStyle,
    onEachFeature: myPopup
  }
  L.geoJSON(stateDemographics, myOptions).addTo(mymap)
}
map4()
