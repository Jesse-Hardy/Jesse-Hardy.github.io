"use strict";
/*$(document).ready(() => {
  let nextSlide = $("#slides img:first-child");

  // start slide show
  setInterval(() => {
    $("#caption").hide(5000);
    $("#slide").hide(5000, () => {
      if (nextSlide.next().length == 0) {
        nextSlide = $("#slides img:first-child");
      } else {
        nextSlide = nextSlide.next();
      }
      const nextSlideSource = nextSlide.attr("src");
      const nextCaption = nextSlide.attr("alt");
      $("#slide").attr("src", nextSlideSource).show(500);
      $("#caption").text(nextCaption).show(100);
    }); // end hide()
  }, 5000); // end setInterval()
});*/
$(document).ready(function () {
  setInterval(function () {
    var current = $("#slideshow img.active");
    var next = current.next();

    if (next.length === 0) {
      next = $("#slideshow img:first-child");
    }

    current.removeClass("active").addClass("last-active");
    next.addClass("active");

    setTimeout(function () {
      current.removeClass("last-active");
    }, 1000);
  }, 5000);
});
