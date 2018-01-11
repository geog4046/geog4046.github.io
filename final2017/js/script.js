jQuery( '#toggle-map' ).click( function(){
  jQuery( '#globe-btn-text,#map-btn-text').toggle()
  jQuery( '.map-div' ).fadeToggle()
})
jQuery( "#socal" ).click( function(){
  map.flyTo( [34.69, -117.76], 8, { animate:true, duration:1 } ) // for leaflet
  globe.goTo({ center: [-117.76, 34.69], zoom: 8 }) // for ArcGIS
})
jQuery( "#northwest" ).click( function(){
  map.flyTo( [46.04, -119.93], 6, { animate:true, duration:1 } )
  globe.goTo({ center: [-119.93, 46.04], zoom: 7 })
})
jQuery( "#midwest" ).click( function(){
  map.flyTo( [36.015, -93.45], 7, { animate:true, duration:1 } )
  globe.goTo({ center: [-93.45, 36.015], zoom: 7 })
})
jQuery( "#submit-coords" ).click(function(){
  var lat = parseFloat( jQuery( "#lat" ).val() )
  var lng = parseFloat( jQuery( "#lng" ).val() )
  map.flyTo( [lat, lng], map.getZoom(), { animate:true, duration:1 } ) // for leaflet
  globe.goTo({ center: [lng, lat], zoom: globe.zoom }) // for ArcGIS
})
jQuery( "#lat, #lng, #submit-coords" ).keypress(function( event ) {
  if( event.which == 13 )
    jQuery( "#submit-coords" ).click()
});
