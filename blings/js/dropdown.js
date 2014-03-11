function DropDown(el){this.dd = el;this.initEvents();}
DropDown.prototype = {
	initEvents:function(){
		var obj = this;
		obj.dd.on('click',function(event){$('.wrapper-dropdown').not(this).removeClass('active');$(this).toggleClass('active');event.stopPropagation();});
		obj.dd.find('.hint').on('click',function(event){event.stopPropagation();});
	}
}