function init () {
  let demoMap = L.map('map1').setView([32.18, -99.14], 4)
  L.tileLayer('https://tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey=9e58ec91b076457dbf9835a1932e032c', {
    attribution: 'Thunderforest'
  }).addTo(demoMap)
  let city = L.marker([30, -90]).addTo(demoMap)
  let area = L.polygon([
    [31, -88],
    [35, -88],
    [32, -82]
  ]).addTo(demoMap)
  area.bindPopup('A polygon')
  city.bindPopup('A marker')
}
window.addEventListener('load', init)
