$(function(){
	var menu = document.querySelector('.page-header-mid');
	var origOffsetY = 92;
	function scroll(){
		if ($(window).scrollTop() >= origOffsetY) {$('.page-header-mid').addClass('nav-static');} 
		else {$('.page-header-mid').removeClass('nav-static');}
	}
	document.onscroll = scroll;
})