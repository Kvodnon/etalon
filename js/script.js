document.addEventListener('DOMContentLoaded', () => {
    var mySwiper = new Swiper('.main-slider', {
        // Optional parameters
        loop: true,
        slidesPerView: 2,
      
        // Navigation arrows
        navigation: {
          nextEl: '.main-slider-next',
          prevEl: '.main-slider-prev',
        },
        speed: 400,
        spaceBetween: 40
    });
});