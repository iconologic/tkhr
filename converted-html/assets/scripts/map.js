function initMap() {

	var loc = new google.maps.LatLng(33.894187,-84.4563133);

	var main_color = '#ff0000',
	landscape = '#b8aea5',
	road = '#7c7773',
	saturation_value= -50,
	weight_value = 1.5,
	brightness_value= -10;

	var mapOptions = {
	  center: loc,
	  zoom: 15,
	  draggable: true,
	  scrollwheel: false,
	  panControl: false,
	  streetViewControl: true,
	  zoomControl: false,
	  minZoom: 10,
	  styles: [
	    {
	      "stylers": [
	        { "hue": landscape },
	        { "saturation": saturation_value },
	        { "lightness": brightness_value },
	        { "weight": weight_value }
	      ]
	    },
	    {
	      featureType: "road.highway",
	      "stylers": [
	        { "hue": road },
	        { "saturation": -100 }
	      ],
	    },
	    {
	      featureType: "poi",
	      "stylers": [
	        { visibility: "off" }
	      ]
	    }
	  ]
	};

	var map = new google.maps.Map(document.getElementById('google-map'),
        mapOptions);

	// Google Map Pin Marker

	var marker = new google.maps.Marker({
    position: loc,
    map: map,
    title: 'Thomas|Horstemeyer'
  });
}