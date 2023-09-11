/**
 * 
 */
/* slider */
$(function() {
	$('#main_slider').carousel({
		interval: 5000,
		pause: false,
		ride: 'carousel'

	});
});

/* bgm */
$(function() {
	myaudio.play();
	myaudio.pause();
	myaudio.duration;
	myaudio.currentTime = 0;
	myaudio.loop = true;
	myaudio.muted = true;
});

/*top button*/

/*  $(function() {
		$("#btn_top").hide();

  $(window).scroll(function() {
		if($(this).scrollTop() > 1000) {
			$("#btn_top").fadeIn();
			}
		else {
			$("#btn_top").fadeOut();
			}
		});

  $("#btn_top").click(function() {
		$('html,body').animate( {
			scrollTop : 0
		}, 800);
		return false;
	});
});*/



