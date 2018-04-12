// https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}
function map4 () {
  // create a map object
  let mymap = L.map('map5').setView([39, -98], 4)
  mymap.on('click', function (event) {
    console.log('You clicked the map at ' + event.latlng)
  })
  let lightBasemapUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
  let satelliteBasemapUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
  // create basemap layer
  let lightBasemap = L.tileLayer(lightBasemapUrl).addTo(mymap)
  let satelliteBasemap = L.tileLayer(satelliteBasemapUrl)

  let myBasemaps = {
    "Light basemap": lightBasemap,
    "Satellite": satelliteBasemap
  }

  L.control.layers(myBasemaps).addTo(mymap)

  function myStyle (feature) {
    let age = feature.properties.MED_AGE
    let color = 'Olive'
    if (age < 38) {
      color = 'Green'
    }
    let myStyle = {
      color: color,
      weight: 1,
      fillOpacity: 0.2
    }
    return myStyle
  }
  function myPopup (feature, layer) {
    let name = feature.properties.STATE_NAME
    let age = feature.properties.MED_AGE
    layer.bindPopup('Median age of ' + name + ': ' + age + '<br>National average: 38')
  }
  let myOptions = {
    style: myStyle,
    onEachFeature: myPopup
  }
  let demographics = L.esri.dynamicMapLayer({
    url: 'https://services.arcgisonline.com/arcgis/rest/services/Demographics/USA_Median_Household_Income/MapServer',
    opacity: 0.7
  }).addTo(mymap)
  demographics.bindPopup(function (error, featureCollection) {
    if(error || featureCollection.features.length === 0) {
      return false
    } else {
      //return 'Risk Level: ' + featureCollection.features[0].properties.MEDHINC_CY
      console.log(featureCollection);
    }
  })
}
map4()
