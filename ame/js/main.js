
$(document).ready(function(){


$("#banner ul li:first-child dl dd").addClass("defaultAni");




$(".pagination a").click(function(){
	$(this).addClass("active");
	$(this).siblings().removeClass("active");
	return false;
});


$('.menu').click(function(){
  $(this).toggleClass('open');
  $("#allMenu").toggleClass("showHide");
  
  return false;
});

$('#allMenu > ul > li > a').click(function(){
  $(this).parent().siblings("li").find(" > a").removeClass("opaUp");
  $(this).parent().find("ul").show();
  $(this).addClass("opaUp");
  $(this).parent().siblings("li").find("ul").hide();

  
  return false;
});




function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, 500);
	    }
	});
}

smoothScroll();





$(window).scroll(function(){
	w = $(window).width();

	getHeaderHeight = $('#banner').outerHeight();
	lastScrollPosition = 0;
	currentScrollPosition = $(window).scrollTop();

	getHeaderHeight = getHeaderHeight-10;


	if(currentScrollPosition > getHeaderHeight) {
		$(".headerBg").addClass("fixedPos");
		$("header").addClass("headerChange");
		$("header h1 a").addClass("svgChange");
		$(".btn0").addClass("hamChange");
		$("#mainFind").addClass("formChange");
		$("#allMenu").addClass("menuChange");
		
	} else {
		$(".headerBg").removeClass("fixedPos");
		$("header").removeClass("headerChange");
		$("header h1 a").removeClass("svgChange");
		$(".btn0").removeClass("hamChange");
		$("#mainFind").removeClass("formChange");
		$("#allMenu").removeClass("menuChange");
		
	} 
	lastScrollPosition = currentScrollPosition;


});


$(window).scroll(function(){
	w = $(window).width();

	getHeaderHeight = $('#banner').outerHeight();
	lastScrollPosition = 0;
	currentScrollPosition = $(window).scrollTop();

	getHeaderHeight = getHeaderHeight-10;


	if(currentScrollPosition > getHeaderHeight) {
		$(".headerBg").addClass("fixedPos");
		$("header").addClass("headerChange");
		$("header h1 a").addClass("svgChange");
		$(".btn0").addClass("hamChange");
		$("#mainFind").addClass("formChange");
		$("#allMenu").addClass("menuChange");
	} else {
		$(".headerBg").removeClass("fixedPos");
		$("header").removeClass("headerChange");
		$("header h1 a").removeClass("svgChange");
		$(".btn0").removeClass("hamChange");
		$("#mainFind").removeClass("formChange");
		$("#allMenu").removeClass("menuChange");
	} 
	lastScrollPosition = currentScrollPosition;


});

// default settting for animation

$(".attenTrans, .whoImg, .mobile, .tmImg0, .tmImg1, .tmImg2, .upImg0, .upImg1, .upImg2, .upImg3, .upImg4, .upImg5, .upImg6").addClass("basicSettingY");
$(".tmP, .upP, .artistImg, .submitBg, .appBg, .appBg1, .bannerBg span, .rec5, .rec6, .rec0, .rec1, .rec2, .rec3, .rec4,.pastPresentFuture h3, .pastPresentFuture dt, .pastPresentFuture .date, .pastPresentFuture .descript, .pastPresentFuture .btns, .bodyTrans h3, .bodyTrans .date, .bodyTrans .descrip, .bodyTrans .btns, .bodyTrans dt, .inOrOut .title, .inOrOut .date, .inOrOut .descript, .inOrOut .btns, .inOrOut h3, .inOrOut dt").addClass("basicSettingX");

$(".tmImg0, .tmImg1, .tmImg2, .upImg0, .upImg1, .upImg2, .upImg3, .upImg4, .upImg5, .upImg6, .rec5, .rec6, .artistImg, .mobile, .pastPresentFuture h3, .pastPresentFuture dt, .pastPresentFuture .date, .pastPresentFuture .descript, .pastPresentFuture .btns, .bodyTrans h3, .bodyTrans .date, .bodyTrans .descrip, .bodyTrans .btns, .bodyTrans dt, .inOrOut .title, .inOrOut .date, .inOrOut .descript, .inOrOut .btns, .inOrOut h3, .inOrOut dt").addClass("default");
$(".tmP, .attenTrans, .upP, .appBg, .appBg1").addClass("defaultTmP");

$(".rec0, .rec1, .rec2").addClass("basicSpan");
$(".rec3, .rec4").addClass("recAni2");
$(".inOrOutBg").addClass("inOrOutAni");
$(".craig").addClass("craigAni");
$(".jenny").addClass("jennyAni");

$(".bannerBg span:eq(0), .bannerBg span:eq(1)").addClass("zero");


if ( $(window).width() <= 920 ) {
	
	$(".attenTrans, .whoImg, .mobile, .tmImg0, .tmImg1, .tmImg2, .upImg0, .upImg1, .upImg2, .upImg3, .upImg4, .upImg5, .upImg6").removeClass("basicSettingY");
	$(".tmP, .upP, .artistImg, .submitBg, .appBg, .appBg1, .bannerBg span, .rec5, .rec6, .rec0, .rec1, .rec2, .rec3, .rec4,.pastPresentFuture h3, .pastPresentFuture dt, .pastPresentFuture .date, .pastPresentFuture .descript, .pastPresentFuture .btns, .bodyTrans h3, .bodyTrans .date, .bodyTrans .descrip, .bodyTrans .btns, .bodyTrans dt, .inOrOut .title, .inOrOut .date, .inOrOut .descript, .inOrOut .btns, .inOrOut h3, .inOrOut dt").removeClass("basicSettingX");

} else { 

	$(".attenTrans, .whoImg, .mobile, .tmImg0, .tmImg1, .tmImg2, .upImg0, .upImg1, .upImg2, .upImg3, .upImg4, .upImg5, .upImg6").addClass("basicSettingY");
	$(".tmP, .upP, .artistImg, .submitBg, .appBg, .appBg1, .bannerBg span, .rec5, .rec6, .rec0, .rec1, .rec2, .rec3, .rec4,.pastPresentFuture h3, .pastPresentFuture dt, .pastPresentFuture .date, .pastPresentFuture .descript, .pastPresentFuture .btns, .bodyTrans h3, .bodyTrans .date, .bodyTrans .descrip, .bodyTrans .btns, .bodyTrans dt, .inOrOut .title, .inOrOut .date, .inOrOut .descript, .inOrOut .btns, .inOrOut h3, .inOrOut dt").addClass("basicSettingX");

}



// scrolling animation effect

$(window).scroll(function(){
	w = $(window).width();

	getHeaderHeight = $('#banner').outerHeight();
	getThisMonthHeight = $('#thisMonth').outerHeight();
	getUpcomingHeight = $('#upcoming').outerHeight();
	getAttentiongHeight = $('#attention').outerHeight();
	getSubmitgHeight = $('#submit').outerHeight();
	lastScrollPosition = 0;
	currentScrollPosition = $(window).scrollTop();

	getHeaderHeight = getHeaderHeight;
	getThisMonthHeight += getHeaderHeight;
	getUpcomingHeight += getThisMonthHeight;
	getAttentiongHeight += getUpcomingHeight;
	getSubmitgHeight += getAttentiongHeight;


	if(currentScrollPosition > getHeaderHeight-500) {

		$(".tmImg0").removeClass("default");
		$(".firstUl li:eq(1) .tmP").removeClass("defaultTmP");
	}  else {
		$(".tmImg0").addClass("default");
		$(".firstUl li:eq(1) .tmP").addClass("defaultTmP");
		
	} 

	if(currentScrollPosition > getHeaderHeight+100) {

		$(".tmImg1").removeClass("default");
		$(".firstUl li:eq(2) .tmP").removeClass("defaultTmP");
	}  else {
		$(".tmImg1").addClass("default");
		$(".firstUl li:eq(2) .tmP").addClass("defaultTmP");
		
	} 

	if(currentScrollPosition > getHeaderHeight+800) {

		$(".tmImg2").removeClass("default");
		$(".firstUl li:eq(3) .tmP").removeClass("defaultTmP");
	}  else {
		$(".tmImg2").addClass("default");
		$(".firstUl li:eq(3) .tmP").addClass("defaultTmP");
		
	} 


	if(currentScrollPosition > getThisMonthHeight-400) {

		$(".upImg0").removeClass("default");
		$("#june li:eq(0) .upP").removeClass("defaultTmP");
	}  else {
		$(".upImg0").addClass("default");
		$("#june li:eq(0) .upP").addClass("defaultTmP");
		
	} 

	if(currentScrollPosition > getThisMonthHeight+200) {

		$(".upImg1, .upImg2, .upImg3").removeClass("default");
		$("#june li:eq(1) .upP, #june li:eq(2) .upP, #june li:eq(3) .upP").removeClass("defaultTmP");
	}  else {
		$(".upImg1, .upImg2, .upImg3").addClass("default");
		$("#june li:eq(1) .upP, #june li:eq(2) .upP, #june li:eq(3) .upP").addClass("defaultTmP");
		
	} 

	if(currentScrollPosition> getThisMonthHeight+1000 ) {

		$(".upImg4, .upImg5, .upImg6").removeClass("default");
		$("#july .upP").removeClass("defaultTmP");
	}  else {
		$(".upImg4, .upImg5, .upImg6").addClass("default");
		$("#july .upP").addClass("defaultTmP");
		
	} 

	if(currentScrollPosition> getUpcomingHeight-500 ) {
		$(".artistImg").removeClass("default");
		$(".attenTrans").removeClass("defaultTmP");
	}  else {
		$(".artistImg").addClass("default");
		$(".attenTrans").addClass("defaultTmP");
		
	} 


	if(currentScrollPosition> getAttentiongHeight-500 ) {
		$(".whoImg").removeClass("default");
		$(".submitBg").removeClass("defaultTmP");
	}  else {
		$(".whoImg").addClass("default");
		$(".submitBg").addClass("defaultTmP");
		
	} 

	if(currentScrollPosition> getSubmitgHeight-500 ) {
		$(".mobile").removeClass("default");
		$(".appBg, .appBg1").removeClass("defaultTmP");
	}  else {
		$(".mobile").addClass("default");
		$(".appBg, .appBg1").addClass("defaultTmP");
		
	} 


	// lastScrollPosition = currentScrollPosition;


});

$(".download a").mouseenter(function(){
	$("#app .mobile span").addClass("addApp");
	return false;
});
$(".download a").mouseleave(function(){
	$("#app .mobile span").removeClass("addApp");
	return false;
});


// play and pause btns

$(".preview a").click(function(){
	$(this).hide();
	$(this).siblings().css("display","inline-block");


	$(".playLine .dot").animate({marginLeft:160},30000);


	return false;
});



// $("#banner").css("opacity",0);

// $("#banner").delay(1000).queue(function(next) {
// 	$("#banner").css("opacity",1);
// 	$(".craig").removeClass("craigAni");
// 	$(".jenny").removeClass("jennyAni");
// });


// $(".bannerBg span").delay(1000).queue(function(next) {
// 	$(".bodyTrans dt").removeClass("default");
// 	next();
// });

// $(".bannerBg span").delay(900).queue(function(next) {
// 	$(".bodyTrans h3").removeClass("default");
// 	next();
// });
// $(".bannerBg span").delay(1000).queue(function(next) {
// 	$(".bodyTrans .date").removeClass("default");

// 	next();
// });
// $(".bannerBg span").delay(1100).queue(function(next) {
// 	$(".bodyTrans .descrip").removeClass("default");
// 	$(".bodyTrans .btns").removeClass("default");
	
// 	next();
// });

// $(".bannerBg span").delay(1100).queue(function(next) {
	
	
// 	next();
// });






$("#banner").css("opacity",0);

$("#banner").delay(1000).queue(function(next) {
	$("#banner").css("opacity",1);
});

$(".bannerBg span").delay(1200).queue(function(next) {
	$(".bannerBg span:eq(0)").removeClass("zero");
	$(".rec1").removeClass("basicSpan");
	
	$(".rec0").removeClass("basicSpan");

	$(".bannerBg span").delay(200).queue(function(next) {
		$(".rec2").removeClass("basicSpan");
		
		$(".bannerBg span").delay(100).queue(function(next) {
			$(".bannerBg span:eq(1)").removeClass("zero");
			$(".rec3").removeClass("recAni2");
			$(".pastPresentFuture h3, .pastPresentFuture dt").removeClass("default");

			next();
				$(".bannerBg span").delay(100).queue(function(next) {

				$(".rec4").removeClass("recAni2");
				$(".pastPresentFuture .date, .pastPresentFuture .descript, .pastPresentFuture .btns, .rec5, .rec6").removeClass("default");
				next();
				});
		});

		next();

	});

	next();
});










$("#banner .pagination a").click(function(){
	var thisIndex = $(this).index();

	$("#banner ul li").eq(thisIndex).removeClass("hideLi").addClass("showLi");
	$("#banner ul li").eq(thisIndex).siblings().removeClass("showLi").addClass("hideLi");

	if(thisIndex == 0) {
		$(".bannerBg span").delay(100).queue(function(next) {
			$(".bannerBg").removeClass("secondBg");
		$(".bannerBg span:eq(0)").removeClass("zero");
		
		$(".rec0").removeClass("basicSpan");
			next();
		});
		

		$(".bannerBg span").delay(200).queue(function(next) {

			$(".rec1").removeClass("basicSpan");
			

			next();
		});

		$(".bannerBg span").delay(300).queue(function(next) {

			$(".rec2").removeClass("basicSpan");
			$(".bannerBg span:eq(1)").removeClass("zero");
			$(".rec3").removeClass("recAni2");
			$(".pastPresentFuture h3, .pastPresentFuture dt").removeClass("default");

			next();
		});

		$(".bannerBg span").delay(400).queue(function(next) {

			$(".rec4").removeClass("recAni2");
			$(".pastPresentFuture .date, .pastPresentFuture .descript, .pastPresentFuture .btns, .rec5, .rec6").removeClass("default");

			next();
		});

	} else {
		$(".bannerBg").addClass("secondBg");
		$(".bannerBg span:eq(0)").addClass("zero");
		$(".bannerBg span:eq(1)").addClass("zero");
		$(".rec0, .rec1, .rec2").addClass("basicSpan");
		$(".rec3, .rec4").addClass("recAni2");
		$(".pastPresentFuture h3, .pastPresentFuture .date, .pastPresentFuture .descript, .pastPresentFuture .btns,.pastPresentFuture dt, .rec5, .rec6").addClass("default");
	}


	if ( thisIndex == 1 ) {
		$(".bannerBg span").delay(50).queue(function(next) {
			$(".bannerBg").addClass("secondBg");

			$(".jenny").removeClass("jennyAni");
			$(".craig").removeClass("craigAni");
			next();
		});
		
		$(".bannerBg span").delay(200).queue(function(next) {
			$(".bodyTrans h3").removeClass("default");

			next();
		});
		$(".bannerBg span").delay(300).queue(function(next) {
			$(".bodyTrans .date").removeClass("default");
			$(".bodyTrans dt").removeClass("default");

			next();
		});
		$(".bannerBg span").delay(400).queue(function(next) {
			$(".bodyTrans .descrip").removeClass("default");
			
			next();
		});

		$(".bannerBg span").delay(500).queue(function(next) {
			$(".bodyTrans .btns").removeClass("default");

			
			next();
		});
		
	} else {
		$(".bannerBg span:eq(0)").addClass("zero");
		$(".bannerBg span:eq(1)").addClass("zero");
		$(".rec0, .rec1, .rec2").addClass("basicSpan");
		$(".rec3, .rec4").addClass("recAni2");
		$(".pastPresentFuture h3, .pastPresentFuture .date, .pastPresentFuture .descript, .pastPresentFuture .btns,.pastPresentFuture dt, .rec5, .rec6, .pastPresentFuture h3, .pastPresentFuture dt, .pastPresentFuture .date, .pastPresentFuture .descript, .pastPresentFuture .btns, .bodyTrans h3, .bodyTrans .date, .bodyTrans .descrip, .bodyTrans .btns, .bodyTrans dt").addClass("default");
		$(".jenny").addClass("jennyAni");
		$(".craig").addClass("craigAni");

	}

	
	if (thisIndex == 2 ) {
		$(".bannerBg").addClass("secondBg");

		$(".inOrOutBg").removeClass("inOrOutAni");
		$(".inOrOut .title").removeClass("default");

		$(".bannerBg span").delay(200).queue(function(next) {
			$(".inOrOut h3").removeClass("default");
			

			next();
		});
		$(".bannerBg span").delay(300).queue(function(next) {

			$(".inOrOut dt").removeClass("default");

			next();
		});
		$(".bannerBg span").delay(400).queue(function(next) {

			$(" .inOrOut .date, .inOrOut .descript, .inOrOut .btns").removeClass("default");
			next();
		});
	} else {
		$(".bannerBg span:eq(0)").addClass("zero");
		$(".bannerBg span:eq(1)").addClass("zero");
		$(".inOrOut .date, .inOrOut .descript, .inOrOut .btns, .inOrOut dt, .inOrOut h3, .inOrOut .title").addClass("default");
		$(".inOrOutBg").addClass("inOrOutAni");
	}

	return false;
});







});