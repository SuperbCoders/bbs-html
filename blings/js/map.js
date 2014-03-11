$(function(){
	var options = {
		zoom: 11,
		center: new google.maps.LatLng(55.755786, 37.61763300000007),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map_canvas"), options);
	var map = new google.maps.Map(document.getElementById("map_address"), options);
});