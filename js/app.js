$( document ).ready(function() {

  	$(".button-collapse").sideNav(); // materialize side menu function

  	setTimeout(function() {
  		$('.slider').slider({full_width: false});

  		$(window).resize(function(){ // resize slider to full screen minus menu bar
		    var viewport = $( window ).height();
			var menu = $('nav').height();
			var slider = viewport - menu;
			console.log(slider);
			$('.slides').height(slider);
			$('.slider').height(slider);
		}).resize();

	}, 2000);

});


