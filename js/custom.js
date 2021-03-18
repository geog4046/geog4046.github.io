window.onload = function(){
  var noCopies = $('.nocopy');
  if (noCopies.length > 0) {
    noCopies.prev().find('.toolbar').hide();
  }
};
