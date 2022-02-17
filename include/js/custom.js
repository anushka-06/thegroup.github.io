var $ = jQuery.noConflict();

jQuery(document).ready(function($){

/*==========================*/ 
/* sliders */ 
/*==========================*/
if($('.podcast-slider').length > 0){
jQuery('.podcast-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  dots:false,
  arrows: true,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  infinite:false, 
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
}

if($('.podcast-slider-one').length > 0){
jQuery('.podcast-slider-one').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  prevArrow: $('.prev-1'),
  nextArrow: $('.next-1'),
  infinite:false,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ] 
   
});
}
 
/*==========================*/  
/* Mobile Slider */  
/*==========================*/ 
if($('.mobile-slider').length > 0){
jQuery('.mobile-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false, 
  infinite: true, 
  centerMode: false, 
  responsive: [
    {
      breakpoint: 5000,
      settings: "unslick"
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,  
        adaptiveHeight: false
      }
    }
  ]
});
}
 
/*==========================*/  
/* Mobile Slider */  
/*==========================*/ 
if($('.service-slider').length > 0){
jQuery('.service-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false, 
  infinite: true, 
  centerMode: false, 
  responsive: [
    {
      breakpoint: 5000,
      settings: "unslick"
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,  
        adaptiveHeight: false
      }
    },
    {
      breakpoint: 579,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,  
        adaptiveHeight: false
      }
    }
  ]
});
}

/*==========================*/  
/* Mobile Slider */  
/*==========================*/ 
if($('.post-slider').length > 0){
jQuery('.post-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false, 
  infinite: true, 
  centerMode: false, 
  responsive: [
    {
      breakpoint: 5000,
      settings: "unslick"
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,  
        adaptiveHeight: true
      }
    },
    {
      breakpoint: 579,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,  
        adaptiveHeight: true
      }
    }
  ]
});
}
/*==========================*/  
/* Scroll on animate */  
/*==========================*/
function onScrollInit( items, trigger ) {
  items.each( function() {
    var osElement = $(this),
        osAnimationClass = osElement.attr('data-os-animation'),
        osAnimationDelay = osElement.attr('data-os-animation-delay');
        osElement.css({
          '-webkit-animation-delay':  osAnimationDelay,
          '-moz-animation-delay':     osAnimationDelay,
          'animation-delay':          osAnimationDelay
        });
        var osTrigger = ( trigger ) ? trigger : osElement;
        osTrigger.waypoint(function() {
          osElement.addClass('animated').addClass(osAnimationClass);
          },{
              triggerOnce: true,
              offset: '95%',
        });
// osElement.removeClass('fadeInUp');
  });
}
onScrollInit( $('.os-animation') );
onScrollInit( $('.staggered-animation'), $('.staggered-animation-container'));





/*==========================*/
/* Header fix */
/*==========================*/
var scroll = $(window).scrollTop();
if (scroll >= 10) {
    $("body").addClass("fixed");
} else {
    $("body").removeClass("fixed");
}


});


$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
        $("body").addClass("fixed");
    } else {
        $("body").removeClass("fixed");
    }
});