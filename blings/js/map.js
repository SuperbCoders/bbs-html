$(function(){
	if($('#map_canvas').length){
		var options1 = {
			zoom: 11,
			center: new google.maps.LatLng(55.755786, 37.61763300000007),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(document.getElementById('map_canvas'), options1);
	};
	
	if($('#map_address').length){
		var options2 = {
			zoom: 8,
			center: new google.maps.LatLng(60.009366254924, 30.245523123685),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(document.getElementById('map_address'), options2);
	};
});