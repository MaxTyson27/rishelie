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
});