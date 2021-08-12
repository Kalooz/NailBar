(function ($) {
  "use strict";
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
})(jQuery);
