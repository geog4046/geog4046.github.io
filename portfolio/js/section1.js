// assign values to a set of variables representing a project's metadata
let projectId = 1
let projectUrl = 'http://bit.ly/2EF070t'
let projectTitle = 'Redlands Tour'
let projectDesc = 'An ArcGIS Online Story Map Tour showing points of interest in Redlands, CA, creating following the tutorial in Chapter 1 of Getting to Know Web GIS.'
let projectThumb = true
let projectKeywords = ['Redlands', 'California', 'story map', 'arcgis online']

// create an array and assign six variables to positions 0 through 5
let projectArray = [
  projectId,
  projectUrl,
  projectTitle,
  projectDesc,
  projectThumb,
  projectKeywords
]

// create an object and assign six variables to property names (i.e., keys)
let projectObject = {
  id: projectId,
  url: projectUrl,
  title: projectTitle,
  desc: projectDesc,
  thumb: projectThumb,
  keywords: projectKeywords
}

// logs the title from the project data array, because the title is in position 2
console.log(projectArray[2])

// two ways to log the title from the project data object
console.log(projectObject.title)
console.log(projectObject['title'])
