var mymap = L.map( 'map' ).setView( [51.505, -0.09], 13 )
var streetsBasemap = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	subdomains: 'abcd',
	minZoom: 1,
	maxZoom: 16,
	ext: 'png'
});
streetsBasemap.addTo( mymap )

var marker = L.marker([51.5, -0.09]).addTo(mymap);

var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

var popup = L.popup()


function onMapClick(e) {
  console.log(e.latlng)
  popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.lat.toFixed(2))
    .openOn(mymap);
}

mymap.on('click', onMapClick);

function createPopup(feature, layer) {
  layer.bindPopup(feature.properties.NAME)
}

jQuery.getJSON( "https://opendata.arcgis.com/datasets/ef927acb261c48c3bbef735602b9f5dc_3.geojson", function( geojsonFeature ) {
  L.geoJSON( geojsonFeature, {
    onEachFeature: createPopup
  }).addTo( mymap )
})
