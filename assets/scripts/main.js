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


	// Team Grid Hover
	var transparent = {'background-color': 'rgba(255,255,255,0)'};
	var bgColor;

	function hoverIn(){
		bgColor = $(this).css('background-color');
	  $(this).css(transparent);
	}

	function hoverOut(){
	  $(this).css('background-color', bgColor); 
	}

	// Hover Effect for Team Grid
	$('.team-partner, .team-associate, .team-counsel, .team-patent').hover(hoverIn, hoverOut);
	  

});