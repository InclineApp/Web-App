	
$(window).resize(function() {

	var height = $(this).height() - $('#nav').height();
	var width = $(this).width();
	var smallHeight = 50;

	if(width > 768) {
		$('.masthead').height(height);
    	$('.video-container').height(height);

    	$('#middle').addClass("full-section");
		$('#centerd-content').addClass("centerd-content");

    	$("section").attr({
        	height: $(this).height(),
        	width: width
        });

        $("#video").attr({
        	height: height,
        	width: width
    	});

		$('#nav').affix({
		      offset: {
		        top: function() {
                    return $('.masthead').height();
                }
		      }
		});
    
	}
	else {
		$('#middle').removeClass("full-section");
		$('#centerd-content').removeClass("centerd-content");
	}

})

$(window).resize(); //on page load
