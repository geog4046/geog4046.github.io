// All code should go in the main() function so it can run when the document is loaded
function main(){
  // Create a variable for the current year and insert it into the page
  var currentYear = new Date().getFullYear()
  jQuery( "#copy-date" ).text( currentYear )
  // Listen for a click on the submit button and run this code when clicked.
  jQuery( "#submit" ).click(function(){
    // Get the value entered by the user
    var email = jQuery( "#email" ).val()
    // Insert text into the output area element.
    jQuery( "#output-area" ).text(  "Successfully added " + email + " to our mailing list!" )
  }) // click()
} // main()
// Listen for the document to be ready (loaded) and then run the main() function
jQuery( document ).ready( main )
