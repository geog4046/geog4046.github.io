// assign values to a set of variables representing a project's metadata
let projectId = 1
let projectUrl = 'http://www.arcgis.com/apps/View/index.html?appid=765b50d197f9486c910f13671d8eda5d'
let projectTitle = 'Map of Recent Earthquakes'
let projectDesc = 'An ArcGIS Online Web App showing worldwide earthquakes of magnitude 2.5 or greater that have occurred in the last 7 days. The dataset is streamed from the USGS.'
let projectThumb = true
let projectMapExtent = [48.51, -28.37, 2.63, -132.34]

// create an array and assign six variables to positions 0 through 5
let projectArray = [
  projectId,
  projectUrl,
  projectTitle,
  projectDesc,
  projectThumb,
  projectMapExtent
]

// create an object and assign six variables to property names (i.e., keys)
let projectObject = {
  id: projectId,
  url: projectUrl,
  title: projectTitle,
  desc: projectDesc,
  thumb: projectThumb,
  projectMapExtent: projectMapExtent
}

// logs the title from the project data array, because the title is in position 2
console.log(projectArray[2])

// two ways to log the title from the project data object
console.log(projectObject.title)
console.log(projectObject['title'])
