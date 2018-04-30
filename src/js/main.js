$(window).scroll(function() {
    
    'use strict';
      if ($(window).scrollTop() > 220 ) {
          $('#nav').css ({
          'background': '#fed700',
          'border-bottom': '1px solid #222',
      });
      } else {
        $('#nav').css ({
          'background': '#fff',
          'border-bottom': 'none',
        });
      }
  });
$('.owl-carousel-home').owlCarousel({
  items:1,
  dots: false,
  pagination: false,
  autoHeight:true,
  loop:true,
  margin:10,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  
});

$('.arrivals').owlCarousel({
  loop:true,
  margin:20,
  autoplay:true,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
});
$('.best').owlCarousel({
  loop:true,
  margin:20,
  autoplay:true,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:4
      }
  }
});