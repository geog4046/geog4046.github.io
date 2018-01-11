// initialize an array to hold objects that contain project metadata
let projectData = []

// create an object to hold a project's metadata and assign the object to the first position in the projectData array
projectData[0] = {
  id: 1,
  url: 'http://www.arcgis.com/apps/View/index.html?appid=765b50d197f9486c910f13671d8eda5d',
  title: 'Map of Recent Earthquakes',
  desc: 'An ArcGIS Online Web App showing worldwide earthquakes of magnitude 2.5 or greater that have occurred in the last 7 days. The dataset is streamed from the USGS.',
  thumb: true,
  projectMapExtent: [48.51, -28.37, 2.63, -132.34]
}

// create an object to hold a project's metadata and assign the object to the second position in the projectData array
projectData[1] = {
  id: 2,
  url: 'https://www.arcgis.com/apps/View/index.html?appid=13fab5cc06914783b8370032cf8cf06a',
  title: 'Western Pacific Earthquakes',
  desc: 'A map centered on the western Pacific showing earthquakes recorded by the USGS within the last month with a magnitude of at least 4.5M.',
  thumb: true,
  projectMapExtent: [46.17, 180, -14.73, 72.56]
}

// step through each element in an array using a "for" loop
for (let i = 0; i < projectData.length; i++) {
  console.log('Element ' + i + ' title: ' + projectData[i].title) // log the current project's title
  console.log('images/ss-project-' + projectData[i].id + '.png') // build and log an image file name based on the project ID
}
