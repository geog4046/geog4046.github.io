var mymap = L.map( 'map' ).setView( [30, -90], 4 )
var streetsBasemap = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	subdomains: 'abcd',
	minZoom: 1,
	maxZoom: 16,
	ext: 'png'
});
streetsBasemap.addTo( mymap )

var marker = L.marker([51.5, -0.09]).addTo(mymap);
var circle = L.circle([17, -171], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 6000000
}).addTo(mymap);
var polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(mymap);

var style = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0.65
};



var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);
