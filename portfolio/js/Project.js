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
