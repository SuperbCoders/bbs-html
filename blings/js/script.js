$(function(){
	$(window).load(function(){
		if($('#carousel1').length){$('#carousel1').carouFredSel({auto:true,responsive:true,width:'100%',height:'verible',scroll:{items:1,duration:1000},prev:'#prev1',next:'#next1',pagination:'#pager1',items: {height: '100%'},swipe:{onMouse:true,onTouch:true}}).trigger('resize');};
		if($('#carousel2').length){$('#carousel2').carouFredSel({auto:false,responsive:true,width:'100%',height:'verible',scroll:4,prev:'#prev2',next:'#next2',items: {width:240,height:'verible',visible:{min:2,max:4}},swipe:{onMouse:true,onTouch:true}}).trigger('resize');};
		if($('#carousel3').length){$('#carousel3').carouFredSel({auto:false,responsive:true,width:'100%',height:'verible',scroll:4,prev:'#prev3',next:'#next3',items: {width:240,height:'verible',visible:{min:2,max:4}},swipe:{onMouse:true,onTouch:true}}).trigger('resize');};
		if($('#carousel4').length){$('#carousel4').carouFredSel({auto:false,responsive:true,width:'100%',height:'verible',scroll:4,prev:'#prev4',next:'#next4',items: {width:240,height:'verible',visible:{min:2,max:4}},swipe:{onMouse:true,onTouch:true}}).trigger('resize');};
		if($('#carousel5').length){$('#carousel5').carouFredSel({auto:true,responsive:true,width:'100%',height:'verible',scroll:{items:2,duration:1000},pagination:'#pager5',items: {height:'verible',visible:{min:1,max:2}},swipe:{onMouse:true,onTouch:true}}).trigger('resize');};
		if($('#carousel6').length){$('#carousel6').carouFredSel({auto:false,responsive:false,width:230,height:100,scroll:1,pagination:'#pager6',swipe:{onMouse:true,onTouch:true}});};
		if($('#grid').length){$('#grid').masonry({itemSelector:'.item',isFitWidth:true});};
	});
	if($('.respotext').length){$('.respotext').responsiveText();};
	$('.tm .dir').mouseover(function(){$('.wrapper-dropdown').removeClass('active');});
	$('.switchboard .switch a').click(function(){var a=$(this).attr('rel');$(this).parents('li').addClass('current').siblings('li').removeClass();$(this).parents('.switchboard').find('.tabs .tab').hide();$(this).parents('.switchboard').find('.tabs '+a).show();return false;});
	$('.switcher label').click(function(){$(this).parents('li').addClass('current').siblings('li').removeClass();});
	$('.search input').focus(function(){$(this).parents('.search').addClass('focus');});
	$('.search input').focusout(function(){$(this).parents('.search').removeClass('focus');});
	$('.btn-navbar').click(function(){$('.page-header-mid').addClass('nav-fullsize');$('.wrapper-dropdown').removeClass('active');$('body').addClass('overley');return false;});
	$('.page-header-mid .close').click(function(){$('.page-header-mid').removeClass('nav-fullsize');$('body').removeClass('overley');return false;});
	
	$('.product .order .btn').click(function(){
		$(this).animate({opacity:0},1000,function(){$(this).html('Спасибо');}).animate({opacity: 1},1000,function(){$(this).animate({opacity:0},1000,function(){$(this).html('В корзину');}).animate({opacity: 1},1000);});
	});
	if($('.popup-with-form').length){$('.popup-with-form').magnificPopup({type:'inline',preloader:false});};
	if($('.checkbox-field').length){$('.checkbox-field').styler();};
	$('#popup-form .row-capt-rule .arrow').click(function(){$('#popup-form .row-rule').slideToggle('slow'); return false;});
	if($('.hover-star').length){
		$('.hover-star').rating({
			focus: function(value, link){var tip = $('#hover-test'); tip[0].data = tip[0].data || tip.html(); tip.html(link.title || 'value: '+value);},
			blur: function(value, link){var tip = $('#hover-test');	$('#hover-test').html(tip[0].data || '');}
		});
	};
	if($('.chosen-select').length){$('.chosen-select').chosen({});};
});