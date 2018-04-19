function map5 () {
  // create a map object
  let myMap = L.map('map').setView([39, -98], 4)
  myMap.on('click', function (event) {
    console.log('You clicked the map at ' + event.latlng)
  })
  // create basemap layer
  let lightBasemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}').addTo(myMap)
  let darkBasemap = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png')

  let basemaps = {
    'Light basemap': lightBasemap,
    'Dark basemap': darkBasemap
  }
  L.control.layers(basemaps).addTo(myMap)

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
  L.geoJSON(stateDemographics, myOptions).addTo(myMap)
}
map5()
