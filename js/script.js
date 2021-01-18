document.addEventListener('DOMContentLoaded', () => {
    var mySwiper = new Swiper('.main-slider', {
        // Optional parameters
        loop: true,
        slidesPerView: 2,

        autoplay: {
          delay: 2500,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.main-slider-next',
          prevEl: '.main-slider-prev',
        },
        speed: 400,
        spaceBetween: 40
    });

    $('.stat-num').each(function () {
      var $this = $(this);
      jQuery({ Counter: -1 }).animate({ Counter: $this.text() }, {
        duration: 2500,
        easing: 'swing',
        step: function () {
          $this.text(Math.ceil(this.Counter));
        }
      });
    });
});

