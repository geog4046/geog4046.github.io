let projects = []

projects[0] = {
  id: 1,
  url: 'http://bit.ly/2EF070t',
  title: 'Redlands Tour',
  desc: 'An ArcGIS Online Story Map Tour showing points of interest in Redlands, CA, creating following the tutorial in Chapter 1 of Getting to Know Web GIS.',
  thumb: true,
  keywords: ['Redlands', 'California', 'story map', 'arcgis online']
}

projects[1] = {
  id: 2,
  url: 'http://arcg.is/08WvnO',
  title: 'Map of Recent Earthquakes',
  desc: 'An ArcGIS Online Web App showing worldwide earthquakes of magnitude 4.5 or greater that have occurred in the last 7 days. The dataset is streamed from the USGS.',
  thumb: true,
  keywords: ['USGS', 'earthquakes', 'arcgis online']
}

for (let i = 0; i < projects.length; i++) {
  if (projects[i].thumb) {
    console.log('ss-project-' + projects[i].id + '.png')
  }
}
