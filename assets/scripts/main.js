$(document).ready(function() {

	//Random bg
    var images = [
    	'bg_1.jpg', 
    	'bg_2.jpg', 
    	'bg_3.jpg', 
    	'bg_4.jpg', 
    	'bg_5.jpg'
    ];

    $('body').css({'background-image': 'url(../assets/images/' + images[Math.floor(Math.random() * images.length)] + ')'});

    //Category Sprites Hover Anim

		$(function(){

		$('.nav-bar li a').append('<span class="hover"></span>');
		// span whose opacity will animate when mouse hovers.

		$('.nav-bar li a').hover(
			function() {
				$('.hover', this).stop().animate({
					'opacity': 1 }, 700,'easeOutSine')
			},
			function() {
				$('.hover', this).stop().animate({
					'opacity': 0 }, 700, 'easeOutQuad')

			})
		});

});