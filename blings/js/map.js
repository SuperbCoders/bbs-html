$(function(){
	if($('#map_canvas1').length){
		var opts1 = {
			zoom: 11,
			center: new google.maps.LatLng(55.755786, 37.61763300000007),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(document.getElementById('map_canvas1'), opts1);
	};
	if($('#map_canvas2').length){
		var opts2 = {
			zoom: 11,
			center: new google.maps.LatLng(60.009366254924, 30.245523123685),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(document.getElementById('map_canvas2'), opts2);
	};
	
	if($('#map_addr1').length){
		var opts3 = {
			zoom: 11,
			center: new google.maps.LatLng(55.755786, 37.61763300000007),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(document.getElementById('map_addr1'), opts3);
	};
	if($('#map_addr2').length){
		var opts4 = {
			zoom: 11,
			center: new google.maps.LatLng(60.009366254924, 30.245523123685),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(document.getElementById('map_addr2'), opts4);
	};
});