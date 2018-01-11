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
    Get an HTML element, make a copy of it, and change the id attribute of the copy.
   */
  cloneProjectHtml (templateId, newId) {
    let template = document.getElementById(templateId)
    let projectHtml = template.cloneNode(true)
    projectHtml.setAttribute('id', newId)
    return projectHtml
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

  /*
    Loop through a given set of project data, use the data to fill HTML elements
    with content, and write the elements to the page.
   */
  generatePortfolioEntries () {
    for (let i = 0; i < this.data.length; i++) {
      let newTemplateHtml = this.cloneProjectHtml('project-template', 'project' + (i + 1))
      let newProjectHtml = this.populateProjectHtml(newTemplateHtml, this.data[i])
      let parent = document.getElementById('projects')
      parent.appendChild(newProjectHtml)
    }
  }

  /*
    Change attributes and text of a given HTML element and its children.
   */
  populateProjectHtml (targetHtml, project) {
    let links = targetHtml.getElementsByTagName('a')
    let image = targetHtml.getElementsByTagName('img')
    let paragraph = targetHtml.getElementsByTagName('p')
    links[0].setAttribute('href', project.url)
    image[0].setAttribute('src', this.createThumbnailSrc(project))
    image[0].setAttribute('alt', this.createThumbnailAlt(project))
    links[1].setAttribute('href', project.url)
    links[1].innerHTML = project.title
    paragraph[0].innerHTML = project.description
    return targetHtml
  }
} // Project class

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
window.addEventListener('load', init)
