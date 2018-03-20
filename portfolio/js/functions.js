function createTitle (title) {
  console.log('Title: ' + title)
}
function createThumbnail (thumb, id) {
  if (thumb === true) {
    console.log('images/ss-project-' + id + '.png') // build and log an image file name based on the project ID
  } else {
    console.log('images/no-preview.png')
  }
}
