var map = L.map('map').setView([37.76, -122.43], 13)

L.esri.basemapLayer('Gray').addTo(map)

var gpService = L.esri.GP.service({
  url: 'https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Network/ESRI_DriveTime_US/GPServer/CreateDriveTimePolygons',
  useCors: false
})

var gpTask = gpService.createTask()

gpTask.setParam('Drive_Times', '1 2 4')

var driveTimes = L.featureGroup()
map.addLayer(driveTimes)

var infoPane = document.getElementById('info-pane')

map.on('click', function (evt) {
  infoPane.innerHTML = 'working...'
  driveTimes.clearLayers()
  gpTask.setParam('Input_Location', evt.latlng)
  gpTask.run(driveTimeCallback)
})

function driveTimeCallback (error, response, raw) {
  if (error) return
  infoPane.innerHTML = 'Click on the map to calculate 1, 2, and 4 minute drive times'
  var greenfill = {
    color: 'green',
    weight: 1
  }
  var yellowfill = {
    color: 'yellow',
    weight: 1
  }
  var redfill = {
    color: 'red',
    weight: 1
  }
  driveTimes.addLayer(L.geoJson(response.Output_Drive_Time_Polygons, {
    style: function (feature) {
      switch (feature.properties.ToBreak) {
        case 1: return greenfill
        case 2: return yellowfill
        case 4: return redfill
      }
    }
  }))
  // infoPane.innerHTML = 'click on the map to calculate<br>1 and 2 minute drivetimes'
  // 
  // if (error) {
  //   return
  // }
  // 
  // driveTimes.addLayer(L.geoJSON(response.Output_Drive_Time_Polygons))
}

// var map = L.map('map').setView([37.76, -122.43], 13)
// 
// L.esri.basemapLayer('Gray').addTo(map)
// 
// var gpService = L.esri.GP.service({
//   url: 'https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Network/ESRI_DriveTime_US/GPServer/CreateDriveTimePolygons',
//   useCors: false
// })
// 
// var gpTask = gpService.createTask()
// 
// gpTask.setParam('Break_Values', '4 8 12')
// 
// var driveTimes = L.featureGroup()
// map.addLayer(driveTimes)
// 
// map.on('click', function (event) {
//   document.getElementById('info-pane').innerHTML = 'Working...'
//   driveTimes.clearLayers()
//   gpTask.setParam('Facilities', event.latlng)
//   gpTask.run(driveTimeCallback)
// })
// 
// function driveTimeCallback (error, response, raw) {
//   if (error) return
//   document.getElementById('info-pane').innerHTML = 'Click on the map to calculate 4, 8, and 12 minute drive times'
//   var greenfill = {
//     color: 'green',
//     weight: 1
//   }
//   var yellowfill = {
//     color: 'yellow',
//     weight: 1
//   }
//   var redfill = {
//     color: 'red',
//     weight: 1
//   }
//   driveTimes.addLayer(L.geoJson(response.Polygons, {
//     style: function (feature) {
//       switch (feature.properties.ToBreak) {
//         case 4: return greenfill
//         case 8: return yellowfill
//         case 12: return redfill
//       }
//     }
//   }))
// }
