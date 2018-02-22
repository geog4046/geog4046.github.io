// assign values to a set of variables representing a project's metadata
let projectId = 1
let projectUrl = 'http://www.arcgis.com/apps/View/index.html?appid=765b50d197f9486c910f13671d8eda5d'
let projectTitle = 'Map of Recent Earthquakes'
let projectDesc = 'An ArcGIS Online Web App showing worldwide earthquakes of magnitude 2.5 or greater that have occurred in the last 7 days. The dataset is streamed from the USGS.'
let projectThumb = true
let projectMapExtent = [48.51, -28.37, 2.63, -132.34]

// display messages in the browser's developer console, combining the values with text
console.log('ID: ' + projectId)
console.log('URL: ' + projectUrl)
console.log('Title: ' + projectTitle)
console.log('Description: ' + projectDesc)
console.log('Has thumbnail? ' + projectThumb)
console.log('Map extent: ' + projectMapExtent)
