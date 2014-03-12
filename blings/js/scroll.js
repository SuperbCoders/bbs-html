$(function(){
	var origOffsetY = $('.showcase').height()-390;
	function scroll(){
		if ($(window).scrollTop() >= 92) {$('.page-header-mid').addClass('nav-static');} 
		else {$('.page-header-mid').removeClass('nav-static');}
		if ($(window).scrollTop() >= origOffsetY) {$('.sidenav').addClass('sidenav-hidden');} 
		else {$('.sidenav').removeClass('sidenav-hidden');}
	}
	document.onscroll = scroll;
})