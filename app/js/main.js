$(function () {
  $('.menu__list-link--info').on('click', function (e) {
    e.preventDefault();
    $('.drop-down').toggleClass('drop-down--active');
    $('.header__bg').toggleClass('active-drop-down');
  });
  $('.header__bg').on('click', function () {
    $('.drop-down').removeClass('drop-down--active');
    $(this).removeClass('active-drop-down');
  });
  $('.header__content-slider').slick({
    fade: true,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
  });

  var swiperReviews = new Swiper('.swiper', {
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next-reviews',
      prevEl: '.swiper-button-prev-reviews',
    },
  });

  var swiperQuestions = new Swiper('.swiper-questions', {
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination-questions',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next-questions',
      prevEl: '.swiper-button-prev-questions',
    },
  });

  var swiperCatalog = new Swiper('.catalog-swiper', {
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination-catalog',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next-catalog',
      prevEl: '.swiper-button-prev-catalog',
    },
  });



  $('.design__tabs-link').on('click', function (e) {
    e.preventDefault();
    $('.design__tabs-link').removeClass('design__tabs-link--active');
    $(this).addClass('design__tabs-link--active');

    $('.design__tabs-content-item').removeClass('design__tabs-content-item--active');
    $($(this).attr('href')).addClass('design__tabs-content-item--active');
  });

  $('.reviews__tabs-link').on('click', function (e) {
    e.preventDefault();
    $('.reviews__tabs-link').removeClass('reviews__tabs-link--active');
    $(this).addClass('reviews__tabs-link--active');

    $('.reviews__content-swiper').removeClass('swiper--active');
    $($(this).attr('href')).addClass('swiper--active');
  });


  $('.design__tabs-gender-link--man, .bathrobe').on('click', function (e) {
    e.preventDefault();
    var manUrl = "images/design/man-bg.jpg";
    $(".design").css("background-image", "url(" + manUrl + ")");
  });



  $('.design__tabs-gender-link--wooman').on('click', function (e) {
    e.preventDefault();
    var woomanUrl = "images/design/wooman-bg.jpg";
    $(".design").css("background-image", "url(" + woomanUrl + ")");
  });

  $('.design__tabs-gender-link--child').on('click', function (e) {
    e.preventDefault();
    var childUrl = "images/design/child-bg.jpg";
    $(".design").css("background-image", "url(" + childUrl + ")");
  });



  $('.design__tabs-size-link').on('click', function (e) {
    e.preventDefault();
    $('.design__tabs-size-link').removeClass('design__tabs-size-link--active');
    $(this).addClass('design__tabs-size-link--active');
  });

  $('.design__tabs-color-link').on('click', function (e) {
    e.preventDefault();
    $('.design__tabs-color-link').removeClass('design__tabs-color-link--active');
    $(this).addClass('design__tabs-color-link--active');
  });

  $('.design__tabs-gender-link').on('click', function (e) {
    e.preventDefault();
    $('.design__tabs-gender-link').removeClass('gender-link--active');
    $(this).addClass('gender-link--active');
  });

  $('.towel').on('click', function () {
    var towelUrl = "images/design/towel-bg.jpg";
    $(".design").css("background-image", "url(" + towelUrl + ")");
  });

  $('.pillow').on('click', function () {
    var pillowUrl = "images/design/pillow.jpg";
    $(".design").css("background-image", "url(" + pillowUrl + ")");
  });

  $('.addText').on('click', function (e) {
    e.preventDefault();
    $('#addText').addClass('modal-text--active');
  });
  $('.modal-font__close').on('click', function () {
    $('#addText').removeClass('modal-text--active');
  });

  $('.modal__select-pic-link').on('click', function (e) {
    e.preventDefault();
    $('.modal__select-pic-link').removeClass('modal__select-pic-link--active');
    $(this).addClass('modal__select-pic-link--active');
  });

  $('.addPicture').on('click', function (e) {
    e.preventDefault();
    $('#addPicture').addClass('modal-pic--active');
  });
  $('.modal-picture__close').on('click', function () {
    $('#addPicture').removeClass('modal-pic--active');
  });

});