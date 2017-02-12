$.noConflict();
jQuery( document ).ready(function( $ ) {
  // Code that uses jQuery's $ can follow here.


	$(document).ready(function(){

		$(".popularSec > ul > li > a").mouseenter(function(){
			if ($(this).parent().hasClass("active")) {

			} else {
				$(this).parent().find(" .pickMonth a").css("color","#fff");
			}
		});

		$(".popularSec > ul > li > a").mouseleave(function(){
			if ($(this).parent().hasClass("active")) {

			} else {
				$(this).parent().find(" .pickMonth a").css("color","#131313");
			}
		});

		$(".popularSec > ul ol li a").click(function(){
			$(this).addClass("active");
			$(this).parent().siblings().find(">a").removeClass("active");

			return false;
		});

		$("#mainMenu h2 a").click(function(){
			$("nav").show();
			$(".navBg").show();

			return false;
		});
		$("nav a.close").click(function(){
			$("nav").hide();
			$(".navBg").hide();

			return false;
		});


		$(window).scroll(function(){

			w = $(window).width();

			getHeaderHeight = 810;
			lastScrollPosition = 750;
			currentScrollPosition = $(window).scrollTop();

			getHeaderHeight = getHeaderHeight-10;

			if (currentScrollPosition > getHeaderHeight) {

				if (w >= 1024) {
					$("#mainSearch").addClass("scrolled");
					$("header h1").addClass("logoScrolled");
					$("#banner .linkBg").addClass("bgScrolled");
				} else {
					$("#mainSearch").removeClass("scrolled");
					$("header h1").removeClass("logoScrolled");
					$("#banner .linkBg").removeClass("bgScrolled");
				}
			} else { 
				$("#mainSearch").removeClass("scrolled");
				$("header h1").removeClass("logoScrolled");
				$("#banner .linkBg").removeClass("bgScrolled");
			}

			lastScrollPosition = currentScrollPosition;


		});


		// $("#fashion .groupping1 > div > h3 > a").click(function(){


		// 	$(this).parent().parent().parent().find("ol").show();
		// 	$(this).parent().parent().parent().find(".groupping").show();
		// 	$(this).parent().parent().parent().find("h5").show();

		// 	$(this).parent().parent().siblings().find("ol").hide();
		// 	$(this).parent().parent().siblings().find(".groupping").hide();
		// 	$(this).parent().parent().siblings().find("h5").hide();

		
		// 	return false; 
		// });




	});




});






