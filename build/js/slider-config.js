$(document).ready(function () {
  $(".categories__list").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnFocus: true,
    autoplaySpeed: 1200,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          autoplay: false,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
