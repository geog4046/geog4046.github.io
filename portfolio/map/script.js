// create a map object
let statemap = L.map('map4').setView([39, -98], 4)

// create basemap layer
let basemapUrl = 'https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey=9e58ec91b076457dbf9835a1932e032c'
L.tileLayer(basemapUrl).addTo(statemap)

let stateStyle = function (state) {
  let age = state.properties.MED_AGE
  let stateColor = 'Olive'
  if (age < 38) {
    stateColor = 'Green'
  }
  let formatting = {
    color: stateColor,
    weight: 1,
    fillOpacity: 0.2
  }
  return formatting
}
let createPopup = function (state, layer) {
  let name = state.properties.STATE_NAME
  let age = state.properties.MED_AGE
  layer.bindPopup('Median age of ' + name + ': ' + age + '<br>National average: 38')
}

let stateOptions = {
  style: stateStyle,
  onEachFeature: createPopup
}
L.geoJSON(stateDemographics, stateOptions).addTo(statemap)
