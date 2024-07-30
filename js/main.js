// works slider
$('.works__list').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
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
