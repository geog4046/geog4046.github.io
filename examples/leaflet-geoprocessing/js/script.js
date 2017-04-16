var map = L.map( 'map' ).setView( [37.76, -122.43], 13 );

L.esri.basemapLayer( 'Streets' ).addTo( map );

var gpService = L.esri.GP.service({
  url: "https://webgis.ga.lsu.edu/gis/rest/services/luke/CalculateDriveTimePolygons/GPServer/CalculateDriveTimePolygons",
  useCors:false
});

var gpTask = gpService.createTask();

gpTask.setParam( "Break_Values", "4 8 12" );

var driveTimes = L.featureGroup();
map.addLayer( driveTimes );

map.on('click', function( event ){
  document.getElementById( 'info-pane' ).innerHTML = 'Working...';
  driveTimes.clearLayers();
  gpTask.setParam( "Facilities", event.latlng )
  gpTask.run( driveTimeCallback );
});

function driveTimeCallback( error, response, raw ){
  document.getElementById( 'info-pane' ).innerHTML = 'Click on the map to calculate 4, 8, and 12 minute drive times';
  var greenfill = {
    "color": "green",
    "weight": 1,
  };
  var yellowfill = {
    "color": "yellow",
    "weight": 1,
  };
  var redfill = {
    "color": "red",
    "weight": 1,
  };

  driveTimes.addLayer( L.geoJson( response.Polygons, {
    style: function( feature ) {
      switch ( feature.properties.ToBreak ) {
          case 4: return greenfill;
          case 8: return yellowfill;
          case 12:   return redfill;
      }
    }
  }));
}
