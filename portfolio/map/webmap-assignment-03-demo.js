// create a map object
let mymap = L.map('mapid').setView([51.505, -0.09], 13)

// create basemap layer
L.tileLayer('https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey=9e58ec91b076457dbf9835a1932e032c').addTo(mymap)

// create a custom icon for a marker
let pick = L.icon({
  iconUrl: '/portfolio/map/pick.png',
  iconSize: [43, 50], // size of the icon
  iconAnchor: [43, 50], // point of the icon which will correspond to marker's location
  popupAnchor: [-22, -27] // point from which the popup should open relative to the iconAnchor
})

// place a marker feature at a location
let marker = L.marker([51.5, -0.09], { icon: pick }).addTo(mymap)

// an array of lat/lon coordinates forming the vertices of a polygon
let polygonCorners = [
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]

// an object of styles for a polygon
let polygonStyle = {
  color: 'orange',
  fillColor: 'yellow'
}

// draw a shape feature with the specified vertices and style
let polygon = L.polygon(polygonCorners, polygonStyle).addTo(mymap)

// add popups to the features drawn on the map
polygon.bindPopup('St. Katharine\'s and Wapping')
marker.bindPopup('London Bridge Station')

// create an even listener that logs the locations of map clicks
mymap.on('click', function (event) {
  console.log('You clicked the map at ' + event.latlng)
})
