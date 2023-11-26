$(".slider__box").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  // adaptiveHeight: true,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 1000,
  arrows: false,
});

// $(".bavarius-slider;").slick({
//   dots: true,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 1,
//   adaptiveHeight: true,
//   slidesToScroll: 1,
//   // autoplay: true,
//   autoplaySpeed: 1000,
//   arrows: false,
// });

$(document).ready(function () {
  $(".owl-theme").owlCarousel({
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
      },
    },
  });
});

$(document).ready(function () {
  $(".logocarusel").owlCarousel({
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        loop: true,
        nav: true,
      },
      600: {
        items: 1,
        loop: true,
        nav: false,
      },
      1000: {
        items: 1,
        nav: true,
        loop: true,
      },
    },
  });
});

$(document).ready(function () {
  $(".vklogocarusel").owlCarousel({
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        loop: true,
        nav: true,
      },
      600: {
        items: 1,
        loop: true,
        nav: false,
      },
      1000: {
        items: 1,
        nav: true,
        loop: true,
      },
    },
  });
});

$(document).ready(function () {
  $(".kukoshop").owlCarousel({
    responsiveClass: true,
    stagePadding: 0,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        loop: true,
        nav: true,
      },
      600: {
        items: 2,
        loop: true,
        nav: false,
      },
      1000: {
        items: 2,
        nav: true,
        loop: true,
      },
    },
  });
});

$(document).ready(function () {
  $(".kukoshopslider").owlCarousel({
    responsiveClass: true,
    stagePadding: 0,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        loop: true,
        nav: true,
      },
      600: {
        items: 1,
        loop: true,
        nav: false,
      },
      1000: {
        items: 1,
        nav: true,
        loop: true,
      },
    },
  });
});
