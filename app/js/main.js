



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

  var swiperResult = new Swiper('.result__swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    pagination: {
      el: '.swiper-pagination-result',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next-result',
      prevEl: '.swiper-button-prev-result',
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

  lightbox.option({
    'showImageNumberLabel': false,
  });

});



setTimeout((function () {
  const e = document.documentElement,
    o = document.getElementById("waterCanvas"),
    t = o.getContext("2d"),
    i = (e) => "video/hahaha_" + e.toString().padStart(5, "0") + ".webp",
    s = new Image;
  s.src = i(1), o.width = 1920, o.height = 1080, s.onload = function () { t.drawImage(s, 0, 0) };
  const r = document.querySelector(".info").scrollHeight;
  const n = document.querySelector(".header").scrollHeight + r;
  window.addEventListener("scroll", () => {
    if (n < e.scrollTop) {
      const o = document.querySelector(".info");
      const r = document.querySelector(".header");
      const n = document.querySelector(".scroll-water");
      const c = (e.scrollTop - r.scrollHeight - o.scrollHeight) / (n.scrollHeight - window.innerHeight);
      const p = Math.min(129, Math.ceil(130 * c));
      requestAnimationFrame(() => {
        return e = p + 1, s.src = i(e), void t.drawImage(s, 0, 0);
        var e
      });
    };
  }), (() => {
    for (let e = 1; e < 130; e++) {
      (new Image).src = i(e)
    }
  })()
}), 1e3), setTimeout((function () {
  const e = document.documentElement,
    o = document.getElementById("towelCanvas"),
    t = o.getContext("2d"),
    i = e => "videoTwo/hahaha_" + e.toString().padStart(5, "0") + ".webp",
    s = new Image;
  s.src = i(1), o.width = 1080, o.height = 1920, s.onload = function () {
    t.drawImage(s, 0, 0)
  };
  const r = document.querySelector(".info").scrollHeight,
    n = document.querySelector(".header").scrollHeight + r + document.querySelector(".scroll-water").scrollHeight;
  window.addEventListener("scroll", () => {
    if (n < e.scrollTop) {
      const r = document.querySelector(".scroll-water"),
        n = document.querySelector(".scroll-towel"),
        c = document.querySelector(".info"),
        p = document.querySelector(".header"),
        l = (e.scrollTop - p.scrollHeight - c.scrollHeight - r.scrollHeight) / (n.scrollHeight - window.innerHeight),
        a = Math.min(33, Math.ceil(34 * l));
      Math.ceil(34 * l) > 147 && (o.style.position = "absolute"), Math.ceil(34 * l) < 148 && (o.style.position = "absolute"), requestAnimationFrame(() => {
        return e = a + 1, s.src = i(e), void t.drawImage(s, 0, 0);
        var e
      })
    }
  }), (() => {
    for (let e = 1; e < 34; e++) {
      (new Image).src = i(e)
    }
  })()
}), 3e3), setTimeout((function () {
  const e = document.documentElement,
    o = document.getElementById("threadCanvas"),
    t = o.getContext("2d"),
    i = e => "videoThree/hahaha_" + e.toString().padStart(5, "0") + ".webp",
    s = new Image;
  s.src = i(1), o.width = 1080, o.height = 1920, s.onload = function () {
    t.drawImage(s, 0, 0)
  };
  const r = document.querySelector(".info").scrollHeight,
    n = document.querySelector(".header").scrollHeight + r + document.querySelector(".scroll-water").scrollHeight + document.querySelector(".scroll-towel").scrollHeight;
  window.addEventListener("scroll", () => {
    if (n < e.scrollTop) {
      const r = document.querySelector(".scroll-water"),
        n = document.querySelector(".scroll-thread"),
        c = document.querySelector(".scroll-towel"),
        p = document.querySelector(".info"),
        l = document.querySelector(".header"),
        a = (e.scrollTop - l.scrollHeight - p.scrollHeight - r.scrollHeight - c.scrollHeight) / (n.scrollHeight - window.innerHeight),
        u = Math.min(114, Math.ceil(115 * a));
      Math.ceil(115 * a) > 147 && (o.style.position = "absolute"), Math.ceil(115 * a) < 148 && (o.style.position = "absolute"), requestAnimationFrame(() => {
        return e = u + 1, s.src = i(e), void t.drawImage(s, 0, 0);
        var e
      })
    }
  }), (() => {
    for (let e = 1; e < 115; e++) {
      (new Image).src = i(e)
    }
  })()
}), 4e3);



// const html = document.documentElement;
// const video1 = document.querySelector('#video1');
// const context = video1.getContext('2d');
// const headerInfoHeight = document.querySelector('.info').scrollHeight + document.querySelector('.header').scrollHeight;

// const currentFrame = index => (
//   `video/hahaha_${index.toString().padStart(5, "0")}.webp`
// )

// const frameCount = 130;

// video1.height = 1080;
// video1.width = 1920;
// const img = new Image();
// img.src = currentFrame(2);
// img.onload = function () {
//   context.drawImage(img, 0, 0);
// }

// const updateImage = index => {
//   img.src = currentFrame(index);
//   context.drawImage(img, 0, 0);
// }

// window.addEventListener('scroll', () => {
//   const scrollTop = html.scrollTop;
//   const maxScrollTop = html.scrollHeight - window.innerHeight;
//   const scrollFraction = scrollTop / maxScrollTop;
//   const frameIndex = Math.min(
//     frameCount - 1,
//     Math.floor(scrollFraction * frameCount)
//   );
//   requestAnimationFrame(() => updateImage(frameIndex + 1));
// });