// create a map object
let mymap = L.map('mapid').setView([37, -95], 4)

// create basemap layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap)
L.tileLayer.wms('https://nowcoast.noaa.gov/arcgis/services/nowcoast/radar_meteo_imagery_nexrad_time/MapServer/WMSServer', {
  layers: '1',
  format: 'image/png',
  transparent: true
}).addTo(mymap)
