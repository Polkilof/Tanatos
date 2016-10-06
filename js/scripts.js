$(document).ready(function(){


	$('.mc-toggle').click(function(e){
		var href = $(this).attr("href"),
		offsetTop = href === "#" ? 0 : $(href).offset().top;
		$('html, body').stop().animate({ 
			scrollTop: offsetTop
		}, 1500);
		e.preventDefault();
	});

	$(".bt-menu-trigger").click(function () {
		$("body").toggleClass("menu-opened");
	});

	$(".sl").slick();

	$(".sl-team").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: true,
		focusOnSelect: true,
		arrows: false,
		draggable: true,
		infinite: true,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				}
			},
			{
				breakpoint: 992,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				}
			},
			{
				breakpoint: 585,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				}
			},
			{
				breakpoint: 321,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				}
			}
		]
	});
});
