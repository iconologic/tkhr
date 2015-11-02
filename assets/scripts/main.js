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

	 // Append industry images to people grid based on class 
	 if ( $('.team-partner').hasClass('electrical') ) {
	 	// console.log('has class electrical');
	 	$('.icon-overlay').append('<img src="../images/overlay-electrical-logo.png" />')
	 }

	 if ( $('.team-partner').hasClass('bio') ) {
	 	// console.log('has class bio');
	 	$('.icon-overlay').append('<img src="../images/overlay-bio-logo.png" />')
	 }

	 if ( $('.team-partner').hasClass('mechanical') ) {
	 	// console.log('has class mechanical');
	 	$('.icon-overlay').append('<img src="../images/overlay-mechanical-logo.png" />')
	 }

	 if ( $('.team-partner').hasClass('chemistry') ) {
	 	// console.log('has class chemistry');
	 	$('.icon-overlay').append('<img src="../images/overlay-chemistry-logo.png" />')
	 }

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
	$('.team-partner, .team-associate, .team-counsel, .team-patent, .team-technical').hover(hoverIn, hoverOut)

	// Job Openings Read More

	var maxChars = 520;
	var ellipsis = "...";
	$(".article").each(function() {
	    var text = $(this).find(".text.full").text();
	    var html = $(this).find(".text.full").html();        
	    if(text.length > maxChars)
	    {            
	      var shortHtml = html.substring(0, maxChars - 3) + "<span class='ellipsis'>" + ellipsis + "</span>";
	      $(this).find(".text.short").html(shortHtml);            
	    }
	});
	$(".read-more").click(function(){        
	    var readMoreText = "more";
	    var readLessText = "less";        
	    var $shortElem = $(this).parent().find(".text.short");
	    var $fullElem = $(this).parent().find(".text.full");        
	    
	    if($shortElem.is(":visible"))
	    {           
	        $shortElem.hide();
	        $fullElem.show();
	        $(this).text(readLessText);
	    }
	    else
	    {
	        $shortElem.show();
	        $fullElem.hide();
	        $(this).text(readMoreText);
	    }       
	});

	//Prople category filter dropdown toggle

	$("li.dropdown").click(function(){	
		$(this).prev( "li" ).toggleClass( "active" );	  
	});

});