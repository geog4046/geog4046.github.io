let mapOptions = {
  center: [1413, 1413],
  zoom: -2,
  minZoom: -2,
  maxZoom: 1,
  crs: L.CRS.Simple,
  maxBoundsViscosity: 1.0
}
let map = L.map('map', mapOptions)
let imageDimensions = [[0, 0], [2826, 2826]]
L.imageOverlay('fortnite-map.jpg', imageDimensions).addTo(map)

// example coordinates
// let prison = L.marker([766, 2144])
