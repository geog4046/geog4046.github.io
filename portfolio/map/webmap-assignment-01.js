function map1 () {
  // create a map object
  let mymap = L.map('map1').setView([51.505, -0.09], 13)

  // create basemap layer
  L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png').addTo(mymap)

  // place a marker feature at a location
  let marker = L.marker([51.5, -0.09]).addTo(mymap)

  // draw a shape feature with vertices at the specified coordinates
  let polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
  ]).addTo(mymap)

  // add popups to the features drawn on the map
  polygon.bindPopup('St. Katharine\'s and Wapping')
  marker.bindPopup('London Bridge Station')

  // create an even listener that logs the locations of map clicks
  mymap.on('click', function (event) {
    console.log('You clicked the map at ' + event.latlng)
  })

  // TO COMPLETE: create a line feature
}
map1()
