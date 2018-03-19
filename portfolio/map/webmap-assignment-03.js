// create a map object
let mymap = L.map('mapid').setView([51.505, -0.09], 13)

// create basemap layer
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}').addTo(mymap)

// create a custom icon for a marker
let greenIcon = L.icon({
  iconUrl: '/portfolio/map/leaf-green.png',
  shadowUrl: '/portfolio/map/leaf-shadow.png',
  iconSize: [38, 95], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
})

// place a marker feature at a location
let marker = L.marker([51.5, -0.09], { icon: greenIcon }).addTo(mymap)

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
