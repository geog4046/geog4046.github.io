/*
  Code to run when the page is finished loading.
 */
function init () {
  $.getJSON('https://geog4046.github.io/portfolio/data/projectData.json', function (data) {
    let portfolio = new Project(data)
    portfolio.generatePortfolioEntries()
  })
}
$(document).ready(init)
