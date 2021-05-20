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
const reviewsSwiper = new Swiper('.reviews-slider', {
  // Необязательные параметры
  loop: true,
  speed: 600,

  // Стрелки навигации
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },

});

var menuButton = document.querySelector(".menu-button")
menuButton.addEventListener('click', function () {
  console.log("Клик по кнопке меню");
  document
  .querySelector(".navbar-bottom")
  .classList.toggle('navbar-bottom--visible');
})


$('.packages-first__text').css({'display':'none'});  
$('.packages-first__description').click(function(){
   $(this).next('.packages-first__text').slideToggle(500)
});

$(".packages-first__description").click(function() {
    $(this).toggleClass("open");
});

