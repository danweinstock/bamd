$(document).ready(function(){
		console.log("Purple Monkey Dishwasher");
		$('.nav-item').on('click', function(e){
			e.preventDefault();
			var option = $(this).attr('href');
			console.log(option);
			$("html, body").animate({ scrollTop: $(option).offset().top-60}, 1000);
		});
		$(window).on("scroll", function() {
    if($(window).scrollTop() > 500) {
        $(".header").addClass("active");
        $("li a").addClass("li-active");
    } else {
       $(".header").removeClass("active");
       $("li a").removeClass("li-active");
    }
		});
		$('select').on('change', function(){
			var option = $(this).val();
			console.log(option);
			$("html, body").animate({ scrollTop: $('#'+option).offset().top}, 1000);
		});
		$( "#radioset" ).buttonset();
		$( "#dialog-1" ).dialog({
			autoOpen: false,
			width: 400,
			buttons: [
				{
					text: "Ok",
					click: function() {
					$( this ).dialog( "close" );
				}
			},
			{
				text: "Cancel",
					click: function() {
				$( this ).dialog( "close" );
			}
		}
	]
});
	$( "#dialog-2" ).dialog({
		autoOpen: false,
		width: 400,
		buttons: [
			{
				text: "Ok",
				click: function() {
				$( this ).dialog( "close" );
				}	
			},
			{
				text: "Cancel",
					click: function() {
				$( this ).dialog( "close" );
			}
		}
	]
});
	$( "#dialog-3" ).dialog({
		autoOpen: false,
		width: 400,
		buttons: [
			{
				text: "Ok",
				click: function() {
				$( this ).dialog( "close" );
				}	
			},
			{
				text: "Cancel",
					click: function() {
				$( this ).dialog( "close" );
			}
		}
	]
});	
	$( "#dialog-4" ).dialog({
		autoOpen: false,
		width: 400,
		buttons: [
			{
				text: "Ok",
				click: function() {
				$( this ).dialog( "close" );
				}	
			},
			{
				text: "Cancel",
					click: function() {
				$( this ).dialog( "close" );
			}
		}
	]
});
	$( "#dialog-link-1" ).click(function( event ) {
		$( "#dialog-1" ).dialog( "open" );
			event.preventDefault();
	});
	$( "#dialog-link-2" ).click(function( event ) {
		$( "#dialog-2" ).dialog( "open" );
			event.preventDefault();
	});
	$( "#dialog-link-3" ).click(function( event ) {
		$( "#dialog-3" ).dialog( "open" );
			event.preventDefault();
	});
	$( "#dialog-link-4" ).click(function( event ) {
		$( "#dialog-4" ).dialog( "open" );
			event.preventDefault();
	});
});