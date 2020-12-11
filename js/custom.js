$(document).ready(function(){
	// header change
	$(window).on('scroll',function(){
		var scrollDistance = $(window).scrollTop();
		var $header = $('.js-header');

		if (scrollDistance > 90) {
			$header.addClass('header--scrolling');
		}
		else{
			$header.removeClass('header--scrolling');
		}
	})

	// rellax
	var rellax = new Rellax('.rellax', {
	    center:true
	  });
})