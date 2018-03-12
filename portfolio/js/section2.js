// initialize an array to hold objects that contain project metadata
let projects = []

// create an object to hold a project's metadata and assign the object to the first position in the projectData array
projects[0] = {
  id: 1,
  url: 'http://bit.ly/2EF070t',
  title: 'Redlands Tour',
  desc: 'An ArcGIS Online Story Map Tour showing points of interest in Redlands, CA, creating following the tutorial in Chapter 1 of Getting to Know Web GIS.',
  thumb: true,
  keywords: ['Redlands', 'California', 'story map', 'arcgis online']
}

// create an object to hold a project's metadata and assign the object to the second position in the projectData array
projects[1] = {
  id: 2,
  url: 'http://arcg.is/08WvnO',
  title: 'Map of Recent Earthquakes',
  desc: 'An ArcGIS Online Web App showing worldwide earthquakes of magnitude 4.5 or greater that have occurred in the last 7 days. The dataset is streamed from the USGS.',
  thumb: false,
  keywords: ['USGS', 'earthquakes', 'arcgis online']
}

// step through each element in an array using a "for" loop
for (let i = 0; i < projects.length; i++) {
  let title = createTitle(i)
  console.log(title)
  let imageSrc = createImageSrc(i)
  console.log(imageSrc)
}

$(document).ready(console.log('The page is ready!'))
