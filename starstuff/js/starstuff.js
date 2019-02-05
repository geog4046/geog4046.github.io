function onMapClick (e) {
  var coords = rc.project(e.latlng)
  console.log(Math.floor(coords.x) + ',' + Math.floor(coords.y))
}

var map, rc, reqs
var completed = []
var stars = L.geoJSON()
$(document).ready(init)

function init () {
  var img = [18000, 18000]
  map = L.map('map', {
    minZoom: 3,
    maxZoom: 7,
    maxBoundsViscosity: 1.0
  })
  rc = new L.RasterCoords(map, img)
  map.setView(rc.unproject([9000, 9000]), 4)
  map.on('click', onMapClick)
  L.tileLayer('https://maps.ga.lsu.edu/tiles/starstuff/{z}/{x}/{y}.png', {
    noWrap: true
  }).addTo(map)
}
