const swiper = new Swiper('.swiper-container', {
  // Необязательные параметры
  loop: true,
  speed: 600,

  // Стрелки навигации
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});