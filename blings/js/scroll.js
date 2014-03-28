$(function(){
	var $menu1 = $('#menu-top');
	var $menu2 = $('#menu-left');
	$(window).scroll(function(){
			var i = $(this).scrollTop();
			if (i > 92){$menu1.addClass('nav-static');} else {$menu1.removeClass('nav-static');};
			if($menu2.length){
				var origOffsetY = $('.showcase').height()-165;
				if (i > origOffsetY){$menu2.fadeOut();} else {$menu2.fadeIn();};
			};
	});
})