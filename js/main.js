document.addEventListener('DOMContentLoaded', function () {
  $('.header-menu__icon').click(function (event) {
    // debugger;
    $(this).toggleClass('active');
    $('.header-menu').toggleClass('active');
    // if ($(this).hasClass('active')) {
    //   $('body').data('scroll', $(window).scrollTop());
    //   $('.header-menu').show(1000);
    // } else {
    // $('.header-menu').hide();
    // }
    // $('body').toggleClass('lock');
    // if (!$(this).hasClass('active')) {
    //   $('body,html').scrollTop(parseInt($('body').data('scroll')));
    // }
  });

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    // loop: true,

    breakpoints: {
      // при ширине 320px и меньше
      320: {
        spaceBetween: 30,
      },
      // при ширине 640px и больше
      768: {
        spaceBetween: 80,
      },
      1000: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
