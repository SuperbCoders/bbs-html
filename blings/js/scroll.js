$(function(){
	function scroll(){
		if ($(window).scrollTop() >= 92) {$('.page-header-mid').addClass('nav-static');} 
		else {$('.page-header-mid').removeClass('nav-static');}
	}
	document.onscroll = scroll;

	if($('.sidenav').length){
		var origOffsetY = $('.showcase').height()-165;
		function scrollY(){
			if ($(window).scrollTop() >= origOffsetY) {$('.sidenav').addClass('sidenav-hidden');} 
			else {$('.sidenav').removeClass('sidenav-hidden');}
		}
		document.onscroll = scrollY;
	};
})