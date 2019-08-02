$(function(){

	$('.nav-link').on('click', function(e){
		e.preventDefault();
		///$(this).addClass('nav-link--active');
		var target = $(this).attr("href");

		$('html, body').stop().animate({
			scrollTop: $(target).offset().top
		}, 600, function(){
			location.hash = target;
		});
		if($('.nav-menu').css('display') === 'block'){
			$('.nav-menu').removeAttr('style');
			$('.nav-button').removeClass('nav-button--active');
		}
		return false;
	});

	/*
	$(window).scroll(function(){
		var scrollDistance = $(window).scrollTop();
		if(scrollDistance >= 85){
			$('.nav').addClass('nav--fixed');
		}
		$('div[id]').each(function(i) {
			if ($(this).position().top <= scrollDistance) {
				$('.nav-link--active').removeClass('nav-link--active');
				$('.nav-link').eq(i).addClass('nav-link--active');
			}
		});
	});
	*/

	$('.nav-button').on('click', function(){
		$(this).toggleClass('nav-button--active');
		$('.nav-menu').fadeToggle(300, function(){

			if($(this).css('display') === 'none'){
				$(this).removeAttr('style');
			}

		});
	});
});