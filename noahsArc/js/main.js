$.noConflict();
jQuery( document ).ready(function( $ ) {
  // Code that uses jQuery's $ can follow here.


	$(document).ready(function(){

		function smoothScroll (duration) {
		$('a[href^="#"]').on('click', function(event) {

		    var target = $( $(this).attr('href') );

		    if( target.length ) {
		        event.preventDefault();
		        $('html, body').animate({
		            scrollTop: target.offset().top
		        }, duration);
		    }
		});
	}

	smoothScroll();

	});

$("#banner ul li p a").addClass("heightZero");
$("#banner ul li p a").addClass("fontSize");
$("#banner ul li h3").addClass("fontSize");
$("#banner ul li p.descript").addClass("fontSize");
$("#banner > ul > li > a").addClass("fontSize");
$("#banner ul li .groupping").addClass("opa");
$("#about .deco").addClass("heightZero");
$("#services .imgs .img").addClass("heightZero");
$("#services .imgs .deco").addClass("heightZero");
$("#people .vid").addClass("scaleBigger");
$("#people ul li").addClass("active");


$(window).load(function(){

	$(this).delay(800).queue(function(){

		$(".loadingPage span:eq(0)").addClass("left");
		$(".loadingPage span:eq(1)").addClass("right");
		$(".loadingPage p").addClass("opa");

		$("#banner").delay(1500).queue(function(){
			$(".loadingPage p").hide();
			$("#banner ul li .groupping").removeClass("opa");

			$("#banner ul li p a").delay(1500).queue(function(){
				$("#banner ul li p a").removeClass('heightZero');
				$("#banner ul li p a").removeClass("fontSize");

				$("#banner ul li h3").delay(300).queue(function(){
					$("#banner ul li h3").removeClass("fontSize");

					$("#banner ul li p.descript").delay(300).queue(function(){
						$("#banner ul li p.descript").removeClass("fontSize");
						$("#banner > ul > li> a").removeClass("fontSize");
					});
				});
	 		});
 	});
		
		

	});
	// $("#banner ul li p a").removeClass("fontSize, heightZero");
	// $("#banner ul li h3").removeClass("fontSize");
	// $("#banner ul li h3").removeClass("fontSize");
});




$("#work .groupping2 li:eq(3)").mouseenter(function(){
	$(this).addClass("left70");
	$("#work .groupping2 li:eq(2)").addClass("left40");
	$("#work .groupping2 li:eq(1)").addClass("left10");
	$("#work .groupping2 li:eq(0)").addClass("leftM20")
});

$("#work .groupping2 li:eq(3)").mouseleave(function(){
	$(this).removeClass("left70");
	$("#work .groupping2 li:eq(2)").removeClass("left40");
	$("#work .groupping2 li:eq(1)").removeClass("left10");
	$("#work .groupping2 li:eq(0)").removeClass("leftM20")
});


$("#services .imgs ul li:eq(2) a").mouseenter(function(){
	$("#services .imgs .deco").addClass("heightZero");
});
$("#services .imgs ul li:eq(2) a").mouseleave(function(){
	$("#services .imgs .deco").removeClass("heightZero");
});


$(window).resize(function(){
	var theW = $(window).width();
	if ( theW <= 1024 ) {
		$("#strategy h2, #strategy li.show p, #strategy li.show .img, #strategy ol li.right h3, #strategy ol li h3, #work h2, #work ul a ol li h3, #work ul a ol li p, #work .firstLi .img, #work .firstLi .prevNext, #work ul li:nth-child(2) .img, #work ul li:nth-child(2) .groupping, #work ul li:nth-child(3) .img, #work ul li:nth-child(5) .img, #work ul li:nth-child(6) .img, #work ul li:nth-child(4) .groupping, #work ul li:nth-child(3) .groupping, #work ul li:nth-child(5) .groupping, #work ul li:nth-child(6) .groupping, #work .work2.width1750 ol, #work .work2.width1750 h4, #work .work1.width1750, #quote, #partners, #people .width1460 h2, #people .width1460 .groupping p a, #people ul li, #contact,#subscribe").removeClass("opa0");
		$("#strategy h2, #strategy li.show p, #strategy li.show .img, #strategy ol li.right h3, #strategy ol li h3, #work h2, #work ul a ol li h3, #work ul a ol li p, #work .firstLi .img, #work .firstLi .prevNext, #work ul li:nth-child(2) .img, #work ul li:nth-child(2) .groupping, #work ul li:nth-child(3) .img, #work ul li:nth-child(5) .img, #work ul li:nth-child(6) .img, #work ul li:nth-child(4) .groupping, #work ul li:nth-child(3) .groupping, #work ul li:nth-child(5) .groupping, #work ul li:nth-child(6) .groupping, #work .work2.width1750 ol, #work .work2.width1750 h4, #work .work1.width1750, #quote, #partners, #people .width1460 h2, #people .width1460 .groupping p a, #people ul li, #contact,#subscribe").removeClass("opa1");
		
	} else { 
		$("#strategy h2, #strategy li.show p, #strategy li.show .img, #strategy ol li.right h3, #strategy ol li h3, #work h2, #work ul a ol li h3, #work ul a ol li p, #work .firstLi .img, #work .firstLi .prevNext, #work ul li:nth-child(2) .img, #work ul li:nth-child(2) .groupping, #work ul li:nth-child(3) .img, #work ul li:nth-child(5) .img, #work ul li:nth-child(6) .img, #work ul li:nth-child(4) .groupping, #work ul li:nth-child(3) .groupping, #work ul li:nth-child(5) .groupping, #work ul li:nth-child(6) .groupping, #work .work2.width1750 ol, #work .work2.width1750 h4, #work .work1.width1750, #quote, #partners, #people .width1460 h2, #people .width1460 .groupping p a, #people ul li, #contact,#subscribe").addClass("opa0");
		
	}	
	return false;
});


if ( $(window).width() <= 1024 ) {
	$("#strategy h2, #strategy li.show p, #strategy li.show .img, #strategy ol li.right h3, #strategy ol li h3, #work h2, #work ul a ol li h3, #work ul a ol li p, #work .firstLi .img, #work .firstLi .prevNext, #work ul li:nth-child(2) .img, #work ul li:nth-child(2) .groupping, #work ul li:nth-child(3) .img, #work ul li:nth-child(5) .img, #work ul li:nth-child(6) .img, #work ul li:nth-child(4) .groupping, #work ul li:nth-child(3) .groupping, #work ul li:nth-child(5) .groupping, #work ul li:nth-child(6) .groupping, #work .work2.width1750 ol, #work .work2.width1750 h4, #work .work1.width1750, #quote, #partners, #people .width1460 h2, #people .width1460 .groupping p a, #people ul li, #contact,#subscribe").removeClass("opa0");
	$("#strategy h2, #strategy li.show p, #strategy li.show .img, #strategy ol li.right h3, #strategy ol li h3, #work h2, #work ul a ol li h3, #work ul a ol li p, #work .firstLi .img, #work .firstLi .prevNext, #work ul li:nth-child(2) .img, #work ul li:nth-child(2) .groupping, #work ul li:nth-child(3) .img, #work ul li:nth-child(5) .img, #work ul li:nth-child(6) .img, #work ul li:nth-child(4) .groupping, #work ul li:nth-child(3) .groupping, #work ul li:nth-child(5) .groupping, #work ul li:nth-child(6) .groupping, #work .work2.width1750 ol, #work .work2.width1750 h4, #work .work1.width1750, #quote, #partners, #people .width1460 h2, #people .width1460 .groupping p a, #people ul li, #contact,#subscribe").removeClass("opa1");
	
} else { 
	$("#strategy h2, #strategy li.show p, #strategy li.show .img, #strategy ol li.right h3, #strategy ol li h3, #work h2, #work ul a ol li h3, #work ul a ol li p, #work .firstLi .img, #work .firstLi .prevNext, #work ul li:nth-child(2) .img, #work ul li:nth-child(2) .groupping, #work ul li:nth-child(3) .img, #work ul li:nth-child(5) .img, #work ul li:nth-child(6) .img, #work ul li:nth-child(4) .groupping, #work ul li:nth-child(3) .groupping, #work ul li:nth-child(5) .groupping, #work ul li:nth-child(6) .groupping, #work .work2.width1750 ol, #work .work2.width1750 h4, #work .work1.width1750, #quote, #partners, #people .width1460 h2, #people .width1460 .groupping p a, #people ul li, #contact,#subscribe").addClass("opa0");
	
}



// scrolling animation effect

$(window).scroll(function(){
	w = $(window).width();

	getBHeight = $('#banner').outerHeight();
	getAHeight = $('#about').outerHeight();
	getWHeight = $('#work').outerHeight();
	getPHeight = $('#people').outerHeight();
	getCHeight = $('#contact').outerHeight();

	lastScrollPosition = 0;
	currentScrollPosition = $(window).scrollTop();

	// getBHeight = getBHeight;
	// getAHeight += getBHeight;
	// getBHeight += getAHeight;
	getAHeight += getWHeight;
	getWHeight += getPHeight;
	getPHeight += getCHeight;

	// getUpcomingHeight += getThisMonthHeight;
	// getAttentiongHeight += getUpcomingHeight;
	// getSubmitgHeight += getAttentiongHeight;

	if(currentScrollPosition <= 100) {
		$("#banner").removeClass("zIndexMinus");
		$("#banner > ul > li").removeClass("blur");
		$("#about .deco").removeClass("heightZero");
	} else {
		$("#banner").addClass("zIndexMinus");
		$("#banner > ul > li").addClass("blur");

	}

	if(currentScrollPosition > 400) {
		$("#about .deco").removeClass("heightZero");
	} else {
		$("#about .deco").addClass("heightZero");
	}

	if(currentScrollPosition > getBHeight+500) {
		$("#services .imgs li:eq(0) .img").removeClass("heightZero");
		$("#services .imgs li:eq(1) .img").removeClass("heightZero");
		$("#services .imgs .deco").removeClass("heightZero");
	} else {
		$("#services .imgs li:eq(0) .img").addClass("heightZero");
		$("#services .imgs li:eq(1) .img").addClass("heightZero");
		$("#services .imgs .deco").addClass("heightZero");
	}


	if(currentScrollPosition > getWHeight+500) {
		$("#people .vid").removeClass("scaleBigger");
	} else {
		$("#people .vid").addClass("scaleBigger");
	}

	if(currentScrollPosition > getWHeight+1300) {
		$("#people ul li:eq(1)").removeClass("active");
		$("#people ul li:eq(2)").removeClass("active");
	} else {
		$("#people ul li:eq(1)").addClass("active");
		$("#people ul li:eq(2)").addClass("active");
	}

	// lastScrollPosition = currentScrollPosition;


});


});






