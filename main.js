AOS.init();

(function ($) {
  "use strict";

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
    $("#title").text($(this).data("service"));
    $("#price").text($(this).data("price"));
    $("#description").text($(this).data("description"));
  });

  navbarCollapse();

  $(window).scroll(navbarCollapse);
})(jQuery);
