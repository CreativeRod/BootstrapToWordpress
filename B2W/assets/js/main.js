$(function() {
  //CACHE THE WINDOW OBJECT
  var $window = $(window);

  //PARALLAX BACKGROUND EFFECT
  $('section[data-type="background"]').each(function() {
    var $bgobj = $(this); // Assigning The Object
    $(window).scroll(function() {
      //scroll the background at var speed
      //the ypos is a negative value because we are scrolling it up

      var yPos = -($window.scrollTop() / $bgobj.data('speed'));

      // Put Together our Final BG position
      var coords = '50% '+ yPos + 'px';

      //Move the BG
      $bgobj.css({ backgroundPosition: coords });
    }); // end window scroll
  });
});
