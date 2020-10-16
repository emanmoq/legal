jQuery(function ($) {



    $(window).scroll(function () {
      
        scrollTop = $(window).scrollTop();

        if (scrollTop > $('header').height()) {
            $('.mainMenu').addClass('scrollNav');
        }

        else {
            $('.mainMenu').removeClass('scrollNav');
        }    
    });   
    $('.teamCar').owlCarousel({
      autoplay: true,
      loop: true,
      margin: 15,
      responsive: {
        0: {
          items: 1,
          margin:0,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 4,
        }
      }
    });
    $('.TestimonialCar').owlCarousel({
      autoplay: true,
      loop: true,
      margin: 15,
      nav:true,
      navText : ['<i class="lni lni-arrow-left"></i>','<i class="lni lni-arrow-right"></i>'],
      responsive: {
        0: {
          items: 1,
          margin:0,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        }
      }
    });
    $('.workCar').owlCarousel({
      autoplay: true,
      loop: true,
      margin: 15,
      responsive: {
        0: {
          items: 1,
          margin:0,
          nav:true,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 5,
        }
      }
    });
    $('.blogCar').owlCarousel({
      autoplay: true,
      loop: true,
      margin: 15,
      nav:true,
      responsive: {
        0: {
          items: 1,
          margin:0,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        }
      }
    });

});

