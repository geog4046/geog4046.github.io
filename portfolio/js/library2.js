function createTitle (i) {
  return projects[i].title
}

function createImageSrc (i) {
  if (projects[i].thumb === true) {
    return 'images/ss-project-' + projects[i].id + '.png'
  } else {
    return 'images/no-preview.png'
  }
}
