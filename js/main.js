const hotelSwiper = new Swiper('.hotel-slider', {
  // Необязательные параметры
  loop: true,
  speed: 600,

  // Стрелки навигации
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});