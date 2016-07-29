$(document).ready(function(){
		console.log("Purple Monkey Dishwasher");
		$(window).on("scroll", function() {
    if($(window).scrollTop() > 430) {
        $(".header").addClass("active");
        $("li a").addClass("li-active");
    } else {
       $(".header").removeClass("active");
       $("li a").removeClass("li-active");
    }
		});
		// $('a').click(function(e){
		// 	e.preventDefault();
		// });
	});