/* 
	Template Name: portfolio Template
*/

$(document).ready(function(){
	
	$('.manu_bar ul').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		easing: 'swing',
		scrollOffset: 60
    });
	
	
	
	/* ityped js */
	
	ityped.init(document.querySelector("#ityped"), {
        strings: ['Freelancer', 'Front-end Developer'],
        loop: true,
        cursorChar: "|"

    });
	
	/* ityped1 js */
	
	ityped.init(document.querySelector("#ityped1"), {
        strings: ['Freelancer', 'Front-end Developer'],
        loop: true,
        cursorChar: "|"

    });
	
	/* wow js */
	new WOW().init();	
	
	/* barfiller js */
	
	$(document).ready(function(){
	 $('#bar1').barfiller({ barColor:'#FF214F', duration:'4000'});
	 $('#bar2').barfiller({ barColor:'#FF214F', duration:'4000'});
	 $('#bar3').barfiller({ barColor:'#FF214F', duration:'4000'});
	 $('#bar4').barfiller({ barColor:'#FF214F', duration:'4000'});
	});
	
	
	//isotope portfolio
		$('.portfolio_div').isotope({
			itemSelector:'.item'
		});

		$('.all-portfolio li').click(function(){
			$('.all-portfolio li').removeClass('active');
			$(this).addClass('active');
			
			var selector = $(this).attr('data-filter');
			$('.portfolio_div').isotope({
				filter:selector
			});
			return false;
		});
		
		
		//Magnific popup 
		$('.portfolio_div').each(function() {
			$(this).magnificPopup({
				delegate: 'a', // 
				type: 'image',
				gallery: {
				  enabled:true
				}
			});
		});
	
	
	

	/* ScrollUp */
	$.scrollUp({
		scrollName: 'scrollUp', 
		topDistance: '300', 
		topSpeed: 300, 
		animation: 'fade', 
		animationInSpeed: 200,
		animationOutSpeed: 200, 
		scrollText: '<i class="fas fa-long-arrow-alt-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
		
	});
	
	

});
	
	/* Sticky Header */
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 20) {
			$('.header_fixed').addClass("sticky");
		} else {
			$('.header_fixed').removeClass("sticky");
		}
	});
	


	
	
	