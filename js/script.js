document.addEventListener('DOMContentLoaded', () => {
    const mySwiper = new Swiper('.main-slider', {
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
        spaceBetween: 40,
        // Responsive breakpoints
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            slidesPerColumn: 2,
            loop: false,
            spaceBetween: 20
          },
          // when window width is >= 480px
          992: {
            slidesPerView: 2,
            spaceBetween: 40
          }
        }
    });

    $('.stat-num').each(function () {
      const $this = $(this);
      jQuery({ Counter: -1 }).animate({ Counter: $this.text() }, {
        duration: 2500,
        easing: 'swing',
        step: function () {
          $this.text(Math.ceil(this.Counter));
        }
      });
    });

    const toggleSearch = () => {
      const headerSearch = document.querySelector('.js-header-search'),
        searchOpen = () => !headerSearch.classList.contains('active') ? headerSearch.classList.add('active') : '',
        searchClose = () => headerSearch.classList.remove('active');

      document.addEventListener('click', (e) => {
        if ( e.target.closest('.js-search-btn') ) {
          searchOpen();
        } else if ( !e.target.closest('.js-header-search') ) {
          searchClose();
        }
      });
    },
    headerSticky = () => {
      const stickyMenu = document.querySelector('.sticky-menu');

      document.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset,
          scrollValue = 200; // Кол-во в пикселях, когда появится шапка
        
        if ( scrollY > scrollValue ) {
          stickyMenu.classList.add('sticky');
        } else {
          stickyMenu.classList.remove('sticky');
        }

      });
    },
    reviewSlider = () => {
      const reviewsSwiper = new Swiper('.reviews-slider', {
        loop: true,
        slidesPerView: 1,
        autoplay: {
          delay: 2500,
        },
        pagination: {
          el: '.swiper-pagination',
          loop: true,
          clickable: true
        },
        speed: 400
      });
    },
    advantagesScroll = () => {
      // document.querySelectorAll('.benefit-title').forEach(title => {

      //   title.addEventListener('click', (e) => {
      //     const id = title.dataset.scroll.substring(1),
      //       scrollTarget = document.getElementById(id),
      //       topOffset = document.querySelector('.sticky-menu.sticky').offsetHeight,
      //       elementPosition = scrollTarget.getBoundingClientRect().top,
      //       offsetPosition = elementPosition - topOffset;
  
      //     window.scrollBy({
      //         top: offsetPosition,
      //         behavior: 'smooth'
      //     });
          
      //   });
      // });

      $('.benefit-title').on('click', function() {
        const id = $(this).attr('data-scroll'),
          stickyMenu = $('.sticky-menu.sticky').height();

        $('html, body').stop().animate({scrollTop: $(id).offset().top}, 'slow');
        
        return false;
      });
    },
    initModal = () => {
      $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',
        fixedContentPos: true,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
      });
    },
    attachInit = () => {
      $('input[type=file]').each(function() {
        const $input = $(this),
          $label = $input.next('.js-label-file'),
          labelVal = $('.js-file-name');

        $input.hide();
        $input.on('change', function(e) {
            let fileName = '';
            if (e.target.value) {
              fileName = e.target.value.split('\\').pop();
            }
            fileName ? $(this.nextElementSibling).text(fileName) : $label.text(labelVal);
        });
      });
    },
    addAttach = () => {
      const addBtn = document.querySelector('.js-add-attach'),
        attachWrap = document.querySelector('.attach-wrap'),
        attachCounter = 3, // Кол-во допустимых клонирований
        html = 
          `
            <div class="js-attach-file attach-file">
                <label class="js-label-file label-file">
                    <input type="file">
                    <span class="js-file-name file-name">Прикрепить фото</span> 
                </label>
            </div>
          `;

      addBtn.addEventListener('click', () => {
        if ( document.querySelectorAll('.js-attach-file').length < attachCounter ) {
          attachWrap.insertAdjacentHTML('beforeend', html);
          attachInit();
          if ( document.querySelectorAll('.js-attach-file').length === attachCounter ) {
            addBtn.style.display = 'none';
          }
        }
      });
    },
    scrollToUp = () => {
      const upBtn = document.querySelector('.up-btn'),
      trackScroll = () => {
        const scrolled = window.pageYOffset,
          coords = 500; // через какое кол-во пикселей будет показываться, моэно вообще поставить высоту экрана
    
        scrolled > coords ? upBtn.classList.add('show') : upBtn.classList.remove('show');
      },
      backToTop = () => {
        if (window.pageYOffset > 0) {
          window.scrollTo({
            top: 0,
            behavior: 'auto'
          });
        }
      };

      window.addEventListener('scroll', trackScroll);
      upBtn.addEventListener('click', backToTop);
    };

    toggleSearch();
    headerSticky();
    reviewSlider();
    advantagesScroll();
    initModal();
    attachInit();
    addAttach();
    scrollToUp();

    $('.menu__btn').on('click', () => {
      $('.mobile-menu').show();
    });
});