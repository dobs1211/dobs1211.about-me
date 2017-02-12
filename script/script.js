$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


/*var mn = $(".main-nav");
mns = "main-nav-scrolled";
hdr = $('header').height();

$(window).scroll(function() {
  if ($(this).scrollTop() > hdr) {
    mn.addClass(mns);
  }
  else {
    mn.removeClass(mns);
  }
});*/


function myFunction(x) {
  x.classList.toggle("change");
}
/*
//this is where we apply opacity to the arrow
$(window).scroll(function() {

  //get scroll position
  var topWindow = $(window).scrollTop();
  //multiply by 1.5 so the arrow will become transparent half-way up the page
  var topWindow = topWindow * 1.5;

  //get height of window
  var windowHeight = $(window).height();

  //set position as percentage of how far the user has scrolled 
  var position = topWindow / windowHeight;
  //invert the percentage
  position = 1 - position;

  //define arrow opacity as based on how far up the page the user has scrolled
  //no scrolling = 1, half-way up the page = 0
  $('.arrow-wrap').css('opacity', position);

});
*/

//Code stolen from css-tricks for smooth scrolling:

/*
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

*/