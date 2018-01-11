/*
  Code to run when the page is finished loading.
 */
function init () {
  // create an object to hold a project's metadata and assign the object to the first position in the projectData array
  let projectData = []

  projectData[0] = {
    id: 1,
    url: 'http://www.arcgis.com/apps/View/index.html?appid=765b50d197f9486c910f13671d8eda5d',
    title: 'Map of Recent Earthquakes',
    description: 'An ArcGIS Online Web App showing worldwide earthquakes of magnitude 2.5 or greater that have occurred in the last 7 days. The dataset is streamed from the USGS.',
    thumb: true
  }

  // create an object to hold a project's metadata and assign the object to the second position in the projectData array
  projectData[1] = {
    id: 2,
    url: 'https://www.arcgis.com/apps/View/index.html?appid=13fab5cc06914783b8370032cf8cf06a',
    title: 'Western Pacific Earthquakes',
    description: 'A map centered on the western Pacific showing earthquakes recorded by the USGS within the last month with a magnitude of at least 4.5M.',
    thumb: true
  }

  let portfolio = new Project(projectData)
  portfolio.generatePortfolioEntries()
}
$(document).ready(init)
