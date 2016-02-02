$(document).ready(function() {
		$(".fancybox").fancybox();
	});	

// $(document).ready(function () {
//     var window_width = $(window).width();
//     $("ul li").click(function () {
//         $(this).children("ul").toggle();
//     });
// });

$(document).ready( function() {

    $('.gallery-item').hover( function() {
        $(this).find('.img-title').fadeIn(300);
    }, function() {
        $(this).find('.img-title').fadeOut(100);
    });
	
});

$(document).ready(function() {
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
});