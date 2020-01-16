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
    return $('#' + templateId).clone(true).attr('id', newId)
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
    let templateId = 'project-template'
    for (let i = 0; i < this.data.length; i++) {
      let newTemplateHtml = this.cloneProjectHtml(templateId, 'project' + (i + 1))
      let newProjectHtml = this.populateProjectHtml(newTemplateHtml, this.data[i])
      $('#projects').append(newProjectHtml)
    }
    $('#' + templateId).remove()
  }

  /*
    Change attributes and text of a given HTML element and its children. Only
    selects elements within the given targetHtml.
   */
  populateProjectHtml (targetHtml, project) {
    /* Select the 'a' (link) elements in the provided HTML. Because there will be
      multiple 'a' elements returned by this jQuery selector, the eq() method
      is needed select a specific 'a' element. The index positions 0 and 1
      select the first and second elements. */
    let links = $('a', targetHtml)
    links.eq(0).attr('href', project.url)
    links.eq(1).attr('href', project.url).html(project.title)

    // Select the image elements from the provided HTML.
    $('img', targetHtml)
      .attr('src', this.createThumbnailSrc(project))
      .attr('alt', this.createThumbnailAlt(project))

    // Select the paragraph element to hold the project description
    $('p', targetHtml).html(project.description)

    return targetHtml
  }
} // Project class
