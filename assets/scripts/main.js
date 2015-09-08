$(document).ready(function() {

	 //Vertical Tab
	 $('#practiceAreaTabs').easyResponsiveTabs({
	     type: 'vertical', //Types: default, vertical, accordion
	     width: 'auto', //auto or any width like 600px
	     fit: true, // 100% fit in a container
	     closed: 'accordion', // Start closed if in accordion view
	     tabidentify: 'hor_1', // The tab groups identifier
	     activate: function(event) { // Callback function if tab is switched
	         var $tab = $(this);
	         var $info = $('#nested-tabInfo2');
	         var $name = $('span', $info);
	         $name.text($tab.text());
	         $info.show();
	     }
	 });

	//Random bg
    var images = [
    	'bg_1.jpg', 
    	'bg_2.jpg', 
    	'bg_3.jpg', 
    	'bg_4.jpg', 
    	'bg_5.jpg'
    ];

    $('body').css({'background-image': 'url(http://sandbox.iconologic.com/thor/assets/images/' + images[Math.floor(Math.random() * images.length)] + ')'});


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
	$('.team-partner, .team-associate, .team-counsel, .team-patent').hover(hoverIn, hoverOut)
	  

});