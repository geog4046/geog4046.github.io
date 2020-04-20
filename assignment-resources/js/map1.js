/* global L */

function init () {
  var map1 = L.map('map1').setView([32.18, -99.14], 4)
  L.tileLayer('https://tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey=9e58ec91b076457dbf9835a1932e032c', {
    attribution: 'Thunderforest'
  }).addTo(map1)
  var city = L.marker([30, -90]).addTo(map1)
  var area = L.polygon([
    [31, -88],
    [35, -88],
    [32, -82]
  ]).addTo(map1)
  area.bindPopup('You clicked a polygon.')
  city.bindPopup('You clicked a marker.')
}
window.addEventListener('load', init)
