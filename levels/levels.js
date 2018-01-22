function onMapClick (e) {
  console.log(e.latlng)
}

var map
var completed = []
var reqs
$(document).ready(init)

function init () {
  var bounds = [[0, 0], [6000, 6000]]
  map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -3,
    maxZoom: 0,
    maxBounds: bounds,
    maxBoundsViscosity: 1.0
  })
  L.imageOverlay('starstuff.jpg', bounds).addTo(map)
  map.fitBounds(bounds)
  map.setView([500, 3000], -2)
  map.on('click', onMapClick)
  loadJson()
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
  let iconUrl = 'red.png'
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
    iconUrl = 'blue.png'
  }
  if (isLevelCompleted) {
    iconUrl = 'green.png'
  }
  let icon = L.icon({
    iconUrl: iconUrl,
    iconSize: [80, 80], // width and height of the image in pixels
    iconAnchor: [42, 40], // point of the icon which will correspond to marker's location
    popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
  })
  return L.marker(latlng, { icon: icon })
}

function listReqs (assignments) {
  var levelAssignments = []
  for (let i = 0; i < assignments.length; i++) {
    let slug = assignments[i]
    levelAssignments.push(reqs[slug].req)
  }
  return levelAssignments
}

function listAssignments (assignments) {
  var levelAssignments = []
  for (let i = 0; i < assignments.length; i++) {
    let slug = assignments[i]
    levelAssignments.push(reqs[slug].id)
  }
  return levelAssignments
}

function loadGeojson () {
  $.getJSON('levels.geojson', function (levels) {
    L.geoJSON(levels, {
      onEachFeature: onEachAssignment,
      pointToLayer: createIcon
    }).addTo(map)
  })
  $.getJSON('lines.geojson', function (lines) {
    L.geoJSON(lines, {
      style: {
        'color': '#444',
        'weight': 5,
        'opacity': 0.45
      }
    }).addTo(map)
  })
}

function loadJson () {
  $.getJSON('players.json', function (players) {
    completed = players['luke']
    $.getJSON('/data/assignments.json', function (assignments) {
      reqs = assignments
      loadGeojson()
    })
  })
}

function onEachAssignment (feature, layer) {
  let levelLabel = '<h1>Level ' + feature.properties.id + '</h1>'
  var levelAssignments = ''
  for (let i = 0; i < feature.properties.assignments.length; i++) {
    let slug = feature.properties.assignments[i]
    levelAssignments += reqs[slug].id + '<br><i>Prereq: ' + reqs[slug].req.join(', ') + '</i><br><br>'
  }
  layer.bindPopup(levelLabel + levelAssignments)
}
