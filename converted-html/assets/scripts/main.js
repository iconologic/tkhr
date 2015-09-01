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
		$('.team-overlay').css('opacity', 1);  
		// when hover over the selected image change the opacity to 1  
		$('.team-overlay').hover(  
		   function(){  
		      $(this).fadeTo('fast', 0.4);  
		   },  
		   function(){  
		      $(this).fadeTo('fast', 1);  
		   });  
		  

});