(function ($) {
  "use strict"; // Start of use strict

  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3500,
    autoplayHoverPause: true,

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },

      2500: {
        items: 2,
      },
    },
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };

  $("li.service").click(function () {
    $("li.service").removeClass("active");
    $(this).addClass("active");

    $("#priceIMG").attr("src", $(this).data("img"));
    $("#title").text(this.textContent);
    $("#text").text($(this).data("service"));
    $("#price").text($(this).data("price"));
    $("#description").text($(this).data("description"));
  });

  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict
