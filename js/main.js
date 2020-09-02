$(function(){

	'use strict';

	var toggleMenu = function() {
		var aside = $('.navbar-js'),
			main = $('.main-js');
		$('.toggle-menu-js').on('click', function(e) {
			aside.addClass('active');
			main.addClass('mobile-open');
			e.preventDefault();
		});
		$('.close-menu-js').on('click', function(e) {
			aside.removeClass('active');
			main.removeClass('mobile-open');
			e.preventDefault();
		});

		$(document).mouseup(function(e) {
			var container = $(".navbar");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      aside.removeClass('active');
	      main.removeClass('mobile-open');
	    }
    });
    
	};
	toggleMenu();

	var contentWayPoint = function() {
		var i = 0;
		jQuery('.main-animate').waypoint( function( direction ) {

			if( direction === 'down' && !jQuery(this.element).hasClass('main-animated') ) {
				
				i++;

				jQuery(this.element).addClass('item-animate');
				setTimeout(function(){

					jQuery('body .main-animate.item-animate').each(function(k){
						var el = jQuery(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn main-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft main-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight main-animated');
							} else {
								el.addClass('fadeInUp main-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	if ($('.main').length > 0 ) {
		$('.main').imagesLoaded( {
		  
		  },
		  function() {
		  	if ($('.card').length > 0 ) {
		    	$('.card').addClass('img-loaded');
		    }
		  }
		);
	}



});