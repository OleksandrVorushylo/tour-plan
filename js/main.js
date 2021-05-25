$(document).ready(function () {
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

var modalButton = $('[data-toggle=modal]');
var closeModelButton = $(".close-modal");
  modalButton.on('click', openModal);
  closeModelButton.on('click', closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }

  $(document).keydown(function(eventObject) {
    if (eventObject.keyCode === 27) {
    eventObject.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
 });

 // Код обработки формы

 $('.modal__form').validate({
   errorClass: "invalid",
   messages: {
    name: {
      required: "Please specify your name",
      minlength: "The name must not be shorter than two characters"
    },
    email: {
      required: "Please specify your email",
      email: "Email address must be in the format of name@domain.com"
    },
    phone: { 
      required: "Please specify your phone number",
      phone: "The phone number should be in this format: +7 (999) 999-99-99"
    },
  },
 })
 $('.subscribe-form').validate({
   errorClass: "subscribe-invalid",
   messages: {
    email: {
      required: "Please specify your email",
      email: "Email address must be in the format of name@domain.com"
    },
  },
 })
 $('.footer__form').validate({
   errorClass: "invalid",
   messages: {
    name: {
      required: "Please specify your name",
      minlength: "The name must not be shorter than two characters"
    },
    phone: { 
      required: "Please specify your phone number",
      phone: "The phone number should be in this format: +7 (999) 999-99-99"
    },
  },
 })

 $('[type=tel]').mask('+7(000) 000-0000');

});
