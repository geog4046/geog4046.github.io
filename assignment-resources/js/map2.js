function init () {
  var map2 = L.map('map2').setView([37, -95], 4)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map2)
  L.tileLayer.wms('http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi', {
    layers: 'nexrad-n0r-900913',
    format: 'image/png',
    transparent: true,
    attribution: 'NOAA, Iowa State University'
  }).addTo(map2)
  L.tileLayer.wms('https://mesonet.agron.iastate.edu/cgi-bin/wms/us/wwa.cgi', {
    layers: 'warnings_c',
    format: 'image/png',
    transparent: true,
    attribution: 'NOAA, Iowa State University'
  }).addTo(map2)
}
window.addEventListener('load', init)
