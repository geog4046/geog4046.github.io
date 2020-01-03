# Example: Geoprocessing with Leaflet
This is an implementation of the geoprocessing example (https://esri.github.io/esri-leaflet/examples/gp-plugin.html) given for a Leaflet plugin called Esri Leaflet. The plugin provides convenient functions for using Esri web services, such as Esri basemaps and geoprocessing services hosted on ArcGIS Server. The example allows the user to click a location on the map, and the geoprocessing service calculates drive time polygons for set time intervals. In other words, the service draws a polygon that shows how far you could drive from the clicked location in 1 minute, 2 minutes, and 4 minutes.
- Connect to web services for the basemap and geoprocessing service.
- Create an event listener to respond when the user clicks on the map.
- Give each of the returned drive time polygons a different color and draw them on the map.  

https://geog4046.github.io/examples/leaflet-geoprocessing/
