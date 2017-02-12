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

	getBHeight = $('#banner .width1750').outerHeight();
	getSHeight = $('#strategy').outerHeight();
	getWHeight = $('#work .work1.width1750').outerHeight();
	getQHeight = $('#quote').outerHeight();
	getPHeight = $('#people').outerHeight();
	getCHeight = $('#contact').outerHeight();
	getSSHeight = $('#subscribe .width1750').outerHeight();

	lastScrollPosition = 0;
	currentScrollPosition = $(window).scrollTop();

	// getBHeight = getBHeight;
	getSHeight += getBHeight;
	getWHeight += getSHeight;
	getPHeight += getWHeight;
	getCHeight += getPHeight;
	getSSHeight += getCHeight;
	// getUpcomingHeight += getThisMonthHeight;
	// getAttentiongHeight += getUpcomingHeight;
	// getSubmitgHeight += getAttentiongHeight;


	if(currentScrollPosition > getBHeight-400) {

		$("#strategy h2").removeClass("opa0");
		$("#strategy li.show .img").removeClass("opa0");

		

		$("#strategy h2").addClass("opa1");
		$("#strategy li.show .img").addClass("opa1");
		


	}  else {
		$("#strategy h2").addClass("opa0");
		$("#strategy li.show .img").addClass("opa0");
		

		$("#strategy h2").removeClass("opa1");
		$("#strategy li.show .img").removeClass("opa1");
		
		
	} 

	if(currentScrollPosition > getBHeight-300) {

		$("#strategy li.show p").removeClass("opa0");
		$("#strategy ol li.right h3").removeClass("opa0");
		$("#strategy ol li h3").removeClass("opa0");
		
		$("#strategy li.show p").addClass("opa1");
		$("#strategy ol li.right h3").addClass("opa1");
		$("#strategy ol li h3").addClass("opa1");
	}  else {
		$("#strategy li.show p").addClass("opa0");
		$("#strategy ol li.right h3").addClass("opa0");
		$("#strategy ol li h3").addClass("opa0");
		
		$("#strategy li.show p").removeClass("opa1");
		$("#strategy ol li.right h3").removeClass("opa1");
		$("#strategy ol li h3").removeClass("opa1");
		
	} 



	if(currentScrollPosition > getSHeight-300) {

		$("#work .work1.width1750").removeClass("opa0");

		$("#work .work1.width1750").addClass("opa1");
	}  else {
		$("#work .work1.width1750").addClass("opa0");

		$("#work .work1.width1750").removeClass("opa1");
		
	} 

	if(currentScrollPosition > getSHeight-200) {

		$("#work h2").removeClass("opa0");
		$("#work ul a ol li.show h3").removeClass("opa0");
		$("#work ul a ol li.show p").removeClass("opa0");
		$("#work .firstLi .img").removeClass("opa0");
		$("#work .firstLi .prevNext").removeClass("opa0");

		$("#work h2").addClass("opa1");
		$("#work ul a ol li.show h3").addClass("opa1");
		$("#work ul a ol li.show p").addClass("opa1");
		$("#work .firstLi .img").addClass("opa1");
		$("#work .firstLi .prevNext").addClass("opa1");
	}  else {
		$("#work h2").addClass("opa0");
		$("#work ul a ol li.show h3").addClass("opa0");
		$("#work ul a ol li.show p").addClass("opa0");
		$("#work .firstLi .img").addClass("opa0");
		$("#work .firstLi .prevNext").addClass("opa0");

		$("#work h2").removeClass("opa1");
		$("#work ul a ol li.show h3").removeClass("opa1");
		$("#work ul a ol li.show p").removeClass("opa1");
		$("#work .firstLi .img").removeClass("opa1"); 
		$("#work .firstLi .prevNext").removeClass("opa1");
		
	} 

	if(currentScrollPosition > getSHeight+50) {

		$("#work ul li:nth-child(2) .img").removeClass("opa0");
		$("#work ul li:nth-child(2) .groupping").removeClass("opa0");


		$("#work ul li:nth-child(2) .img").addClass("opa1");
		$("#work ul li:nth-child(2) .groupping").addClass("opa1");

	}  else {
		
		$("#work ul li:nth-child(2) .img").addClass("opa0");
		$("#work ul li:nth-child(2) .groupping").addClass("opa0");


		$("#work ul li:nth-child(2) .img").removeClass("opa1");
		$("#work ul li:nth-child(2) .groupping").removeClass("opa1");
	} 

	if(currentScrollPosition > getSHeight+100) {

		$("#work ul li:nth-child(3) .img").removeClass("opa0");
		$("#work ul li:nth-child(3) .groupping").removeClass("opa0");


		$("#work ul li:nth-child(3) .img").addClass("opa1");
		$("#work ul li:nth-child(3) .groupping").addClass("opa1");

	}  else {
		
		$("#work ul li:nth-child(3) .img").addClass("opa0");
		$("#work ul li:nth-child(3) .groupping").addClass("opa0");


		$("#work ul li:nth-child(3) .img").removeClass("opa1");
		$("#work ul li:nth-child(3) .groupping").removeClass("opa1");
	} 

	if(currentScrollPosition > getSHeight+150) {

		$("#work ul li:nth-child(4) .img").removeClass("opa0");
		$("#work ul li:nth-child(4) .groupping").removeClass("opa0");

		$("#work ul li:nth-child(4) .img").addClass("opa1");
		$("#work ul li:nth-child(4) .groupping").addClass("opa1");

	}  else {
		
		$("#work ul li:nth-child(4) .img").addClass("opa0");
		$("#work ul li:nth-child(4) .groupping").addClass("opa0");

		$("#work ul li:nth-child(4) .img").removeClass("opa1");
		$("#work ul li:nth-child(4) .groupping").removeClass("opa1");
	} 

	if(currentScrollPosition > getSHeight+200) {

		$("#work ul li:nth-child(5) .img").removeClass("opa0");
		$("#work ul li:nth-child(5) .groupping").removeClass("opa0");

		$("#work ul li:nth-child(5) .img").addClass("opa1");
		$("#work ul li:nth-child(5) .groupping").addClass("opa1");

	}  else {
		
		$("#work ul li:nth-child(5) .img").addClass("opa0");
		$("#work ul li:nth-child(5) .groupping").addClass("opa0");

		$("#work ul li:nth-child(5) .img").removeClass("opa1");
		$("#work ul li:nth-child(5) .groupping").removeClass("opa1");
	} 

	if(currentScrollPosition > getSHeight+250) {

		$("#work ul li:nth-child(6) .img").removeClass("opa0");
		$("#work ul li:nth-child(6) .groupping").removeClass("opa0");

		$("#work ul li:nth-child(6) .img").addClass("opa1");
		$("#work ul li:nth-child(6) .groupping").addClass("opa1");

	}  else {
		
		$("#work ul li:nth-child(6) .img").addClass("opa0");
		$("#work ul li:nth-child(6) .groupping").addClass("opa0");

		$("#work ul li:nth-child(6) .img").removeClass("opa1");
		$("#work ul li:nth-child(6) .groupping").removeClass("opa1");
	} 

	if(currentScrollPosition > getSHeight+300) {

		$("#work .work2.width1750 ol").removeClass("opa0");
		$("#work .work2.width1750 h4").removeClass("opa0");

		$("#work .work2.width1750 ol").addClass("opa1");
		$("#work .work2.width1750 h4").addClass("opa1");

	}  else {
		
		$("#work .work2.width1750 ol").addClass("opa0");
		$("#work .work2.width1750 h4").addClass("opa0");

		$("#work .work2.width1750 ol").removeClass("opa1");
		$("#work .work2.width1750 h4").removeClass("opa1");
	} 


	if(currentScrollPosition > getWHeight) {

		$("#quote").removeClass("opa0");

		$("#quote").addClass("opa1");

	}  else {
		
		$("#quote").addClass("opa0");

		$("#quote").removeClass("opa1");
	} 


	if(currentScrollPosition > getPHeight-300) {

		$("#partners").removeClass("opa0");

		$("#partners").addClass("opa1");

	}  else {
		
		$("#partners").addClass("opa0");

		$("#partners").removeClass("opa1");
	} 

	if(currentScrollPosition > getCHeight-500) {

		$("#people .width1460 h2").removeClass("opa0");
		$("#people .width1460 h2").addClass("opa1");

	}  else {
		
		$("#people .width1460 h2").addClass("opa0");
		$("#people .width1460 h2").removeClass("opa1");
	} 
	if(currentScrollPosition > getCHeight-250) {

		$("#people .width1460 .groupping p a").removeClass("opa0");
		$("#people .width1460 .groupping p a").addClass("opa1");

	}  else {
		
		$("#people .width1460 .groupping p a").addClass("opa0");
		$("#people .width1460 .groupping p a").removeClass("opa1");
	} 

	if(currentScrollPosition > getCHeight-250) {

		$("#people ul li:first-child").removeClass("opa0");

		$("#people ul li:first-child").addClass("opa1");

	}  else {
		
		$("#people ul li:first-child").addClass("opa0");

		$("#people ul li:first-child").removeClass("opa1");
	} 

	if(currentScrollPosition > getCHeight-200) {

		$("#people ul li:eq(1)").removeClass("opa0");

		$("#people ul li:eq(1)").addClass("opa1");

	}  else {
		
		$("#people ul li:eq(1)").addClass("opa0");

		$("#people ul li:eq(1)").removeClass("opa1");
	} 

	if(currentScrollPosition > getCHeight-100) {

		$("#people ul li:eq(2)").removeClass("opa0");

		$("#people ul li:eq(2)").addClass("opa1");

	}  else {
		
		$("#people ul li:eq(2)").addClass("opa0");

		$("#people ul li:eq(2)").removeClass("opa1");
	} 

	if(currentScrollPosition > getSSHeight+200) {

		$("#contact").removeClass("opa0");

		$("#contact").addClass("opa1");

	}  else {
		
		$("#contact").addClass("opa0");

		$("#contact").removeClass("opa1");
	} 

	if(currentScrollPosition > getSSHeight+400) {

		$("#subscribe").removeClass("opa0");

		$("#subscribe").addClass("opa1");

	}  else {
		
		$("#subscribe").addClass("opa0");

		$("#subscribe").removeClass("opa1");
	} 


	// lastScrollPosition = currentScrollPosition;


});


});






