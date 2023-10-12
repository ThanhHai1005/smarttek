var navbar = document.getElementById("navbar");
var top_of_object_navbar = navbar.offsetTop;
$('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});
$(document).click(function(e) {
	if (!$(e.target).is('#navbar')) {
    	$('.collapse').collapse('hide');	    
    }
});
$(document).ready(function() {
  /* Every time the window is scrolled ... */
  animation_load();
  addNavbar();
  $(window).scroll(function() {
    /* Check the location of each desired element */
    addNavbar();
    animation_load();
  });
});
function addNavbar() {
  if (window.pageYOffset >= top_of_object_navbar) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
function animation_load() {
  $(".main-section").each(function(i) {
    var top_of_object_services = $(".fadeServices").offset().top;
    var top_of_object_products = $(".flex-class").offset().top;
    var top_of_object_contact = $("#contact").offset().top;
    var top_of_object_clients = $("#clients").offset().top;
    //var top_of_object_retails = $("#smart-retail").offset().top;

    var bottom_of_window = $(window).scrollTop() + $(window).height();
    /* If the object is completely visible in the window, fade it it */
    if (bottom_of_window >= top_of_object_services + 50) {
      $("#services").animate({ opacity: "1" });
      $(".fadeServices").addClass("fadeInLeft");
      $(".fadeInUpImg").addClass("fadeInUp");
    }
    if (bottom_of_window >= top_of_object_contact + 100) {
      $("#contact").animate({ opacity: "1" });
      $(".contact-left").addClass("fadeInLeft");
      $(".contact-right").addClass("fadeInUp");
    }
    

    if (bottom_of_window >= top_of_object_products + 200) {
      $("#products").animate({ opacity: "1" });
      $(".flex-class").animate({ opacity: "1" });
      $(".flex-class").addClass("fadeInUp");
    }

    if (bottom_of_window >= top_of_object_products + 1000) {
      $("#smart-retail").animate({ opacity: "1" });
      $(".flex-class").animate({ opacity: "1" });
      $(".flex-class").addClass("fadeInUp");
    }

    if (bottom_of_window >= top_of_object_clients + 200) {
      $("#clients").animate({ opacity: "1" });
      $(".flex-class").animate({ opacity: "1" });
      $(".flex-class").addClass("fadeInUp");
    }
  });
}




