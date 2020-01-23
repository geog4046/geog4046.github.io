/* eslint-env jquery */
// specify the base URL of the API
var baseUrl = 'http://bigcityapi.us-west-2.elasticbeanstalk.com'

// listen for a click on the Submit button
jQuery('#submit').click(function (e) {
  // get the city name the user typed into the search box
  var inputCity = jQuery('#inputCity').val()
  var inputUrl, outputHeading
  // Create the correct request URL depending on what the user selected and typed
  if (jQuery('#inputPop').is(':checked')) {
    inputUrl = '/get/population/?city='
    outputHeading = 'The population of ' + inputCity + ' is:'
    createOutput(inputCity, inputUrl, outputHeading)
  }
  if (jQuery('#inputLat').is(':checked')) {
    inputUrl = '/get/north-of/?city='
    outputHeading = 'Big cities with a higher latitude than ' + inputCity + ':'
    createOutput(inputCity, inputUrl, outputHeading)
  }
})

// send the input to the API and print the response on the page
function createOutput (inputCity, inputUrl, outputHeading) {
  jQuery.get(baseUrl + inputUrl + inputCity, function (data) {
    if (data !== 'No matches found.') {
      jQuery('#output-heading').html(outputHeading)
      jQuery('#output-response').html(data)
      return
    }
    jQuery('#output-response').html(data)
  })
}

// prevent the normal form submission to AJAX instead
jQuery('form').submit(function (e) { e.preventDefault() })
