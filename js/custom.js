$(document).ready(function(){

	var view = $(window),
		html = $('html'),
		body = $('body');

	$('ul#skills').addClass("ready");
	$('ul#skills li').each(function(){
		var i = $(this).index();
		$(this).delay(100 * i).animate({right:"0%"},1000,function(){
			$(this).children('span').fadeIn(600);
		});	
	});
		
	$('a[data-rel]').each(function() {
    	$(this).attr('rel', $(this).data('rel'));
	});
	$("a[rel^='prettyPhoto']").prettyPhoto({
		overlay_gallery: false,
		social_tools: '',
		deeplinking: false,
		default_width: 500,
		opacity:"1"
	});
	
	$("#contactform #submit_btn").click(function() {  
	  
	    $("#contactform .input, #contactform textarea").removeClass('error');
	    		
		var name = $("#contactform input#name");
		if (name.val() == "") {
			name.addClass('error').focus();
			return false;
		}
		var email = $("#contactform input#email");
		if (email.val() == "") {
	      	email.addClass('error').focus();
	     	return false;
		}		
		var message = $("#contactform textarea#message");
		if (message.val() == "") {
	      	message.addClass('error').focus();
	     	return false;
		}
	});
	
	if(window.location.hash == "#contact") {
  		$('#contactform').slideUp(800,function(){
  			$('#messageSent').fadeIn(800);
  		});	
  	}
	
	$('#titleName, #socialIcons').clone().appendTo('#sticker');
	
	function responsive(){
		if(view.width() < 820){
			body.addClass('respond');
		} else {
			body.removeClass('respond');
		}
	}
	responsive();
		
	view.resize(function(){ responsive(); });
	
	view.load(function(){ responsive(); });
  	 
});