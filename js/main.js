 AOS.init({
 	duration: 800,
 	easing: 'linear',
 	once: false
 });

jQuery(document).ready(function($) {

	"use strict";

	
	$(".loader").delay(1000).fadeOut("slow");
  $("#overlayer").delay(1000).fadeOut("slow");	
  

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();


	var sitePlusMinus = function() {
		$('.js-btn-minus').on('click', function(e){
			e.preventDefault();
			if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function(e){
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();

	
	var siteCarousel = function () {
		if ( $('.nonloop-block-13').length > 0 ) {
			$('.nonloop-block-13').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
				stagePadding: 0,
		    margin: 0,
		    autoplay: true,
		    nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        600:{
	        	margin: 0,
	        	nav: true,
	          items: 2
	        },
	        1000:{
	        	margin: 0,
	        	stagePadding: 0,
	        	nav: true,
	          items: 3
	        },
	        1200:{
	        	margin: 0,
	        	stagePadding: 0,
	        	nav: true,
	          items: 4
	        }
		    }
			});
		}

		$('.single-text').owlCarousel({
	    center: true,
	    items: 1,
	    loop: true,
			stagePadding: 0,
	    margin: 0,
	    autoplay: true,
	    pauseOnHover: false,
	    nav: false,
	    smartSpeed: 1000,
	    dots:false,
	  });
		$('.slide-one-item').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
			stagePadding: 0,
	    margin: 0,
	    autoplay: true,
	    smartSpeed: 1000,
	    pauseOnHover: false,
	    nav: true,
	    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
	  });

	  

	  $('.slide-one-item-alt').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
			stagePadding: 0,
	    margin: 0,
	    smartSpeed: 1000,
	    autoplay: false,
	    pauseOnHover: true,
	    mouseDrag: false,
	    touchDrag: false,
	  });
	  $('.slide-one-item-alt-text').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
			stagePadding: 0,
	    margin: 0,
	    smartSpeed: 1000,
	    autoplay: false,
	    pauseOnHover: true,
	    mouseDrag: false,
	    touchDrag: false,
	    dot: true,
	    
	  });

	$(".portfolio-carousel").owlCarousel({
		center: true,
	    items: 1,
	    loop: true,
		stagePadding: 0,
	    margin: 0,
	    autoplay: false,
		nav: true,
		dot : true,
		navText: ['<span class="icon-arrow_back port-left">', '<span class="icon-arrow_forward port-right">'],
	});	  
	  

	  $('.custom-next').click(function(e) {
	  	e.preventDefault();
	  	$('.slide-one-item-alt').trigger('next.owl.carousel');
	  	$('.slide-one-item-alt-text').trigger('next.owl.carousel');
	  });
	  $('.custom-prev').click(function(e) {
	  	e.preventDefault();
	  	$('.slide-one-item-alt').trigger('prev.owl.carousel');
	  	$('.slide-one-item-alt-text').trigger('prev.owl.carousel');
	  });
	  
	};
	siteCarousel();

	var siteStellar = function() {
		$(window).stellar({
	    responsive: false,
	    parallaxBackgrounds: true,
	    parallaxElements: true,
	    horizontalScrolling: false,
	    hideDistantElements: false,
	    scrollProperty: 'scroll'
	  });
	};
	// siteStellar();
	var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	// navigation
  var OnePageNavigation = function() {
    var navToggler = $('.site-menu-toggle');
   	$("body").on("click", ".smoothscroll[href^='#']", function(e) {
      e.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        'scrollTop': $(hash).offset().top
      }, 600, 'easeInOutExpo', function(){
        window.location.hash = hash;
      });

    });
  };
  OnePageNavigation();

  var siteScroll = function() {

  	

  	$(window).scroll(function() {

  		var st = $(this).scrollTop();

  		if (st > 100) {
  			$('.js-sticky-header').addClass('shrink');
  		} else {
  			$('.js-sticky-header').removeClass('shrink');
  		}

  	}) 

  };
  siteScroll();


  var siteIstotope = function() {
  	/* activate jquery isotope */
	  var $container = $('#posts').isotope({
	    itemSelector : '.item',
	    isFitWidth: true
	  });

	  $(window).resize(function(){
	    $container.isotope({
	      columnWidth: '.col-sm-3'
	    });
	  });
	  
	  $container.isotope({ filter: '*' });

  }

  siteIstotope();


  $('.fancybox').on('click', function() {
	  var visibleLinks = $('.fancybox');

	  $.fancybox.open( visibleLinks, {}, visibleLinks.index( this ) );

	  return false;
	});

});
    $('.contact-map-father').addClass('animated');
$('.contact-map-son .close').click(function(){
    $('.contact-map-father').addClass('slideOutDown')
})

function contactTrigger(){
	$('.contact-map-father').removeClass('slideOutDown')
	$('.contact-map-father').addClass('slideInUp')
    $('.contact-map-father').css('visibility' , 'visible')
    if($('body').hasClass('offcanvas-menu')){
        $('body').removeClass('offcanvas-menu')          
    }
}

$('#step_1').click(function(e){
	e.preventDefault();
	let i_need = $(".i_need");
	let i_need_checked = false;
	$(i_need).each(function(){
		if($(this).prop("checked") == true){
            i_need_checked = true
        }
	})
	if(i_need_checked == false){
		alert("Kindly Select One Or More Services")
		return false;
	}
	$("#view_1").fadeOut('linear')
	setTimeout(function(){
		$("#view_2").fadeIn('linear')
	},400)
	$('.caption-text').text("I Need Help In")
})

$("#init").click(function(){
	$("#view_2").fadeOut('linear')
	setTimeout(function(){
		$("#view_1").fadeIn('linear')
	},400)
	$('.caption-text').text("I Want To Build")	
})

$("#step_2").click(function(){
	$("#view_2").fadeOut('linear')
	setTimeout(function(){
		$("#view_3").fadeIn('linear')
	},400)	
	$('.caption-text').text("Get An Estimate!")	
})

$("#step_1_s").click(function(){
	$("#view_3").fadeOut('linear')
	setTimeout(function(){
		$("#view_2").fadeIn('linear')
	},400)	
	$('.caption-text').text("I Need Help In")
})

let form = $("#estimate-form");
$(form).submit(function(e){
	e.preventDefault()
	$('#submit_cont').fadeOut('slow')
	let formData = $(form).serialize()
	$.ajax({
		url  : 'controllers/estimate.php',
		type : "POST",
		data : formData
	})
	.done(function(response){
		if(response == 'sent'){
			$("#view_3").fadeOut('linear');
			setTimeout(function(){
				$("#view_4").slideDown('easeIn')
			},300);
			$('.caption-text').text('Sent. We\'ll Get Back To You Shortly!')
		}
		else{
			alert(response);
			$('#submit_cont').fadeIn('slow')
		}
	})
	.fail(function(){
		$('#submit_cont').fadeIn('slow')
		alert('Could Not establish Connection with Our server. Kindly Check your internet Connection and try again')
	})
})	

$("#contactForm").submit(function(e){
	e.preventDefault()
	$('#contactForm button').attr('disabled', 'disabled')
	$('#contactForm button').text('Sending...')
	let formData = $("#contactForm").serialize()
	$.ajax({
		url  : 'controllers/contactHandler.php',
		type : "POST",
		data : formData
	})
	.done(function(response){
		if(response == 'sent'){
			$('.form-control').val('')
			$('#contactForm button').text('Sent. We\'ll Get Back To You Shortly!')
		}
		else{
			alert(response);
			$('#contactForm button').removeAttr('disabled')
			$('#contactForm button').text('Contact Us')
		}
	})
	.fail(function(){
		$('#contactForm button').removeAttr('disabled')
		$('#contactForm button').text('Contact Us')
		alert('Could Not establish Connection with Our server. Kindly Check your internet Connection and try again')
	})
})	
