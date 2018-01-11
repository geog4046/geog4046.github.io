class Project {
  /*
    When a new Project object is created, fill the Project.data property (array)
    with metadata.
   */
  constructor (projectData) {
    // initialize an array to hold objects that contain project metadata
    this.data = projectData
  }

  /*
    Build a string to use as the value for the alt attribute of an img tag.
   */
  createThumbnailAlt (project) {
    let thumbnailAlt = 'Project ' + project.id + ' - ' + project.title
    return thumbnailAlt
  }

  /*
    Build a file path for a project thumbnail image based on the project ID to be
    used as the value for the src attribute of an img tag.
   */
  createThumbnailSrc (project) {
    if (project.thumb === true) {
      let thumbnailSrc = 'images/ss-project-' + project.id + '.png'
      return thumbnailSrc
    }
    return 'images/no-preview.png'
  }
} // Project class

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

// create a new object for this portfolio
let portfolio = new Project(projectData)

// step through each element in an array using a "for" loop
for (let i = 0; i < portfolio.data.length; i++) {
  let imgAlt = portfolio.createThumbnailAlt(portfolio.data[i])
  let imgSrc = portfolio.createThumbnailSrc(portfolio.data[i])
  console.log(imgAlt)
  console.log(imgSrc)
}
