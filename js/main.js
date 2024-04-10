document.addEventListener('DOMContentLoaded', function () {
  $('.header-menu__icon').click(function () {
    $(this).toggleClass('active');
    $('.header-menu').toggleClass('active');
  });

  const swiper = new Swiper('.swiper-reviews', {
    // Optional parameters
    direction: 'horizontal',

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

  const swiper2 = new Swiper('.swiper-competence', {
    // Optional parameters
    direction: 'horizontal',

    breakpoints: {
      // при ширине 640px и больше
      768: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 18,
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

  const swiper3 = new Swiper('.swiper-main', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 3000, // Интервал автопроигрывания в миллисекундах (3 секунды)
      disableOnInteraction: false, // Позволяет автопроигрыванию продолжаться после взаимодействия пользователя
    },

    breakpoints: {
      320: {
        spaceBetween: 20,
      },
      // при ширине 640px и больше
      768: {
        spaceBetween: 80,
      },
      1440: {
        spaceBetween: 20,
      },
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    }
  });
});
