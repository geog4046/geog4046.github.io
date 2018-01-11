function createLeafletMap(){
var map = L.map( 'leaflet-map', {zoomControl: false} ).setView( [30, -90], 3 )
var streets = L.tileLayer( 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' ).addTo( map )
var satellite = L.tileLayer( 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}' )
var cities = L.layerGroup().addTo( map )
var earthquakes = L.layerGroup().addTo( map )
var basemapControl = {
  "Streets": streets,
  "Satellite": satellite
}
var layerControl = {
  "Earthquakes": earthquakes,
  "Cities": cities
}
L.control.layers( basemapControl, layerControl ).addTo( map )
L.Control.zoomHome().addTo(map) // plugin https://github.com/torfsen/leaflet.zoomhome#usage

jQuery.getJSON( "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson", function( json ){
  L.geoJSON( json, {
    onEachFeature: createEarthquakePopup,
    pointToLayer: createEarthquakeIcon
  })
})
jQuery.getJSON( "https://geog4046instructor.github.io/2017-final/data/cities_pop_100k.geojson", function( json ){
  L.geoJSON( json, {
    onEachFeature: createCityPopup,
    pointToLayer: createCityIcon
  })
})

function createCityPopup( city, layer ){
  var html = city.properties.NAME + ', ' + city.properties.STATE + '<br> pop. ' + parseInt( city.properties.POP_2010).toLocaleString()
  layer.bindPopup( html )
  cities.addLayer( layer )
}

function createCityIcon( city, latlng ){
  var options = {
    radius: 8,
    fillColor: "lightgreen",
    color: "black",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
  }
  return L.circleMarker( latlng, options );
}

function createEarthquakePopup( earthquake, layer ){
  var html = '<a target="_blank" href="' + earthquake.properties.url + '">' + earthquake.properties.mag + " magnitude, " + earthquake.properties.place + ' <small><span class="glyphicon glyphicon-new-window" aria-hidden="true"></span></small></a>'
  layer.bindPopup( html )
  earthquakes.addLayer( layer )
}

function createEarthquakeIcon( earthquake, latlng ){
  var earthquakeIcon = L.icon({
    iconUrl: 'images/earthquake-marker.png',
    shadowUrl: 'images/earthquake-marker-shadow.png',
    iconSize:     [25, 25], // width and height of the image in pixels
    shadowSize:   [35, 20], // width, height of optional shadow image
    iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location
    shadowAnchor: [12, 6],  // anchor point of the shadow. should be offset
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
  });
  return L.marker( latlng, { icon: earthquakeIcon } );
}
}
jQuery( document ).ready( createLeafletMap )
