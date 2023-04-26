$(document).ready(function () {
  // Navbar scroll background change
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $("nav").addClass("scrolled");
    } else {
      $("nav").removeClass("scrolled");
    }
  });

  // Smooth scrolling for navigation
  $("a.nav-link").on("click", function (event) {
    event.preventDefault();
    const target = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top - 70
      },
      1000,
      function () {
        // Collapse the navbar after scrolling
        $(".navbar-collapse").collapse("hide");
      }
    );
  });
  $("a.navbar-brand").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
});
