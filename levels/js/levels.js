function onMapClick (e) {
  var coords = rc.project(e.latlng)
  console.log(Math.floor(coords.x) + ',' + Math.floor(coords.y))
}

var map, rc, reqs
var completed = []
var stars = L.geoJSON()
$(document).ready(init)

function init () {
  var img = [18000, 18000]
  map = L.map('map', {
    minZoom: 3,
    maxZoom: 7,
    maxBoundsViscosity: 1.0
  })
  rc = new L.RasterCoords(map, img)
  map.setView(rc.unproject([9000, 9000]), 4)
  map.on('click', onMapClick)
  L.tileLayer('https://maps.ga.lsu.edu/tiles/starstuff/{z}/{x}/{y}.png', {
    noWrap: true
  }).addTo(map)
  loadJson('default')
  $('#player-lookup').click(function () {
    let id = $('#player').val()
    loadJson(id)
  })
  $('#player-form').submit(function (e) {
    e.preventDefault()
  })
}

function arrayMatch (needle, haystack) {
  let isMatch = false
  if (needle.length > 0 && haystack.length > 0) {
    isMatch = needle.every(function (val) {
      if ($.inArray(val, haystack) === -1) {
        return false
      }
      return true
    })
  }
  return isMatch
}

function createIcon (feature, latlng) {
  let iconUrl = 'images/red.png'
  var isLevelUnlocked = true
  var levelAssignments = []
  for (let i = 0; i < feature.properties.assignments.length; i++) {
    let slug = feature.properties.assignments[i]
    levelAssignments.push(reqs[slug].id)
    completed.push('none')
    let matched = arrayMatch(reqs[slug].req, completed)
    completed.pop()
    if (!matched) {
      isLevelUnlocked = false
    }
  }
  completed.push('none')
  let isLevelCompleted = arrayMatch(levelAssignments, completed)
  completed.pop()
  if (isLevelUnlocked) {
    iconUrl = 'images/blue.png'
  }
  if (isLevelCompleted) {
    iconUrl = 'images/green.png'
  }
  let icon = L.icon({
    iconUrl: iconUrl,
    iconSize: [80, 80], // width and height of the image in pixels
    iconAnchor: [42, 40], // point of the icon which will correspond to marker's location
    popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
  })
  return L.marker(latlng, { icon: icon })
}

function createLines (geojson) {
  let branchNames = ['Core', 'Design', 'Admin', 'Dev', 'GIS']
  let branchConnections = []
  let lineCoords = []
  let lineStyle = { color: '#EEE', opacity: 0.25, lineJoin: 'round' }
  $.each(branchNames, function (branchKey, branchName) {
    lineCoords[branchName] = []
    $.each(geojson.features, function (key, val) {
      if (val.properties.branch === branchName) {
        let coords = rc.unproject(val.geometry.coordinates)
        lineCoords[branchName].push(coords)
      }
    })
    L.polyline(lineCoords[branchName], lineStyle).addTo(map)
  })
  branchConnections = [
    [lineCoords['Core'][0], lineCoords['Design'][0]],
    [lineCoords['Core'][2], lineCoords['Admin'][0]],
    [lineCoords['Core'][5], lineCoords['Dev'][0]],
    [lineCoords['Core'][4], lineCoords['GIS'][0]]
  ]
  L.polyline(branchConnections, lineStyle).addTo(map)
}

function loadGeojson () {
  map.removeLayer(stars)
  $.getJSON('levels.geojson', function (levels) {
    stars = L.geoJSON(levels, {
      coordsToLatLng: function (coords) {
        return rc.unproject(coords)
      },
      onEachFeature: onEachAssignment,
      pointToLayer: createIcon
    }).addTo(map)
    createLines(levels)
  })
}

function loadJson (id) {
  $.getJSON('players.json', function (players) {
    completed = players[id]
    $.getJSON('/data/assignments.json', function (assignments) {
      reqs = assignments
      loadGeojson()
    })
  })
}

function onEachAssignment (feature, layer) {
  let html, levelAssignments, levelPrereq, slug
  let levelName = feature.properties.branch + ' Level ' + feature.properties.level
  html = '<h1>' + levelName + '</h1>'
  for (let i = 0; i < feature.properties.assignments.length; i++) {
    slug = feature.properties.assignments[i]
    levelAssignments = reqs[slug].id
    levelPrereq = reqs[slug].req.join(', ')
    html += levelAssignments + ' (requires ' + levelPrereq + ')<br>'
  }
  layer.bindTooltip(html, { className: 'level-tooltip' })
}
