$( document ).ready(function() {

	$('.gallery').hide();
    console.log( "ready!" );

	$( document ).on("mouseover", "img.thumbnail.img-responsive", function() {
		$(this).css("cursor","pointer");
	});

	$( document ).on("click", ".gallery" , function() {
		$('.gallery').fadeOut( "swing" );
	}); 

	$( document ).on("click", "img.thumbnail.img-responsive", function() {
		$('.gallery').fadeIn( "swing" );
		$('#currentImage').attr('src', $(this).attr('src').replace('.jpg','') + '_LG.jpg');
	});


	/*$('img.thumbnail.img-responsive').toggle(function()
	 {$(this).animate({width: "500px"}, 'slow');},
	 function()
	 {$(this).animate({width: "200px"}, 'slow');
	});*/


    $( document ).on('click', '.btn.btn-primary', function(){
    	if($(this).attr('class') == ('btn btn-primary more')) {
   			$(this).parent().insertBefore($(this).parent().parent().children(':first-child'));
   			$(this).parent().parent().children(':nth-child(3)').switchClass('col-sm-4', 'col-sm-6', 400, 'swing');
    		$(this).parent().parent().children(':nth-child(2)').switchClass('col-sm-4', 'col-sm-6', 400, 'swing');
    		$(this).parent().switchClass('col-sm-4', 'col-sm-12 verticalMargins', 400, 'swing');
	   		$(this).parent().animate({'background-color':'#99C8CF'},400,'swing');
	   		$(this).attr('class', 'btn btn-primary less');
	   		$(this).siblings("img").css({'float' : 'left', 'margin-right' :' 10px'});
	   		$(this).html('less');
	   		$(this).siblings("img").attr("src", $(this).siblings("img").attr("src").replace('.jpg','') + '_LG.jpg');
	   		$(this).siblings("span").show();
    	}
    	else if ($(this).attr('class') == ('btn btn-primary less')) {
    		console.log('hey');
    		$(this).parent().animate({'background-color':'transparent'},400,'swing');
	   		$(this).parent().switchClass('col-sm-12 verticalMargins', 'col-sm-4', 400, 'swing');
	   		$(this).attr('class', 'btn btn-primary more');
	   		$(this).html('more');
	   		$(this).siblings("span").hide();
	   		$(this).siblings("img").attr("src", $(this).siblings("img").attr("src").replace('_LG',''));
	   		$(this).parent().parent().children(':nth-child(3)').switchClass('col-sm-6', 'col-sm-4', 400, 'swing');
    		$(this).parent().parent().children(':nth-child(2)').switchClass('col-sm-6', 'col-sm-4', 400, 'swing');
	    }
    });
});