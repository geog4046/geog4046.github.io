var mymap = L.map( 'map' ).setView( [30, -90], 4 )
var streets = L.tileLayer( 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' )
streets.addTo( mymap )

var marker = L.marker([30, -90]).addTo( mymap );

var circle = L.circle([30, -90], {

  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 90000

}).addTo(mymap);

var polygon = L.polygon([

  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]

]).addTo(mymap);

jQuery.getJSON( "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson", function( earthquakes ) {

  L.geoJSON( earthquakes ).addTo( mymap );

})
