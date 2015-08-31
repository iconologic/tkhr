$(document).ready(function() {
    var images = [
    	'bg_1.jpg', 
    	'bg_2.jpg', 
    	'bg_3.jpg', 
    	'bg_4.jpg', 
    	'bg_5.jpg'
    ];

    $('body').css({'background-image': 'url(../assets/images/' + images[Math.floor(Math.random() * images.length)] + ')'});
});