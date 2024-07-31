// works slider
$('.works__list').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1240,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

// work slider btns
$('.works__btn-prev').on('click', function (e) {
  e.preventDefault();
  $('.works__list').slick('slickPrev');
});

$('.works__btn-next').on('click', function (e) {
  e.preventDefault();
  $('.works__list').slick('slickNext');
});
