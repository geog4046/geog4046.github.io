var map = L.map( 'map' ).setView( [30,-90], 4 );

var streets = L.tileLayer( 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo( map ); // Add this layer to the map to make it the default basemap

var satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Communit'
});

// NEW: create an object to hold the group of earthquake points
var featuregroup = L.layerGroup();

function addpopup( feature, layer ){
  var html = feature.properties.mag + " magnitude, " + feature.properties.place;
  layer.bindPopup( html );

  // NEW: add the current earthquake point to the group
  featuregroup.addLayer( layer );
}

$.getJSON( "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson", function( geojsonFeatures ){
  L.geoJson( geojsonFeatures, { onEachFeature: addpopup } ).addTo(map);
});

// NEW: add the group of earthquake points to the map.
featuregroup.addTo( map );

var baselayers = {
  "Streets": streets,
  "Satellite": satellite
};

var datalayers = {
  "Earthquakes": featuregroup
};

L.control.layers( baselayers, datalayers ).addTo( map );
