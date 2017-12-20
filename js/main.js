$.noConflict();




jQuery( document ).ready(function( $ ) {
  // Code that uses jQuery's $ can follow here.

	

  		$(window).on('load', function(){

		$("#work .next .bg").addClass("fromtopleft");
		$("#work .prev .bg").addClass("frombottomleft");
		$(".pagination").addClass("fromcenterright");
		$("header h1").addClass("fromtopleft");
		$("header nav, header .dots").addClass("fromtopright");
		$("#social").addClass("frombottomleft");
		$(".greyBackground").addClass("loadingBigger");
		$("#work .seeDesign").addClass("moveToLeft");

		$("#work li h1, .what, .briefInfo").addClass("textAni");
		$("#work ul li .groupping2 a").addClass("listLink");
		$("#work ul li .groupping2 a").addClass("tenSec");

		$(".lines span.vertical").delay().queue(function(next) {
			$(".lines span.vertical").removeClass("verticalNo");
			$(".lines span.horizontal").removeClass("horizontalNo");
			next();

			$(".lines span.vertical").delay(2000).queue(function(next) {
				$(".lines span.vertical").addClass("opa100");
				$(".lines span.horizontal").addClass("opa100");
				$(".outline img").removeClass("opa100");
				next();

				$(".outline img").delay(1000).queue(function(next) {
					$(".outline img").addClass("opa100");
					$(".grayscale img").removeClass("opa100");
					next();

					$(".grayscale img").delay(1000).queue(function(next) {
						$(".grayscale img").addClass("opa100");
						$(".colour img").removeClass("opa100");
						next();

						$(".colour img").delay(1500).queue(function(next) {
							$(".colour img").addClass("opa100");
							next();

							$(".loading").delay(500).queue(function(next) {
								$(".loading").addClass("upLoading, minusZIndex");
								next();

								$(".greyBackground > div > span").delay(1000).queue(function(next) {
									$(".greyBackground > div > span").removeClass("hideBackground");
									next();

									$(".greyBackground").delay(1000).queue(function(next) {
										$(".greyBackground").removeClass("loadingBigger");
										$("header h1").removeClass("fromtopleft");
										$("header nav, header .dots").removeClass("fromtopright");
										$("#social").removeClass("frombottomleft");
										$(".pagination").removeClass("fromcenterright");
										$("#work").addClass("changeIndex");
										next();

										$("#work h1").delay(1000).queue(function(next) {
											$("#work h1").removeClass("textAni");
											next();

											$(".what").delay(200).queue(function(next) {
												$(".what").removeClass("textAni");
												next();

												$(".briefInfo").delay(500).queue(function(next) {
													$(".briefInfo").removeClass("textAni");
													$("#work .next .bg").removeClass("fromtopleft");
													$("#work .prev .bg").removeClass("frombottomleft");
													$("#work .prev .bg").addClass("noMore");
													next();

													$("#work ul li .groupping2 a").delay(1000).queue(function(next) {
														$("#work ul li .groupping2 a").removeClass("listLink");
														next();

														$("#work ul li .groupping2 a").delay(500).queue(function(next) {
															$("#work ul li .groupping2 a").removeClass("tenSec");
															$("#work ul li.active .groupping2 a").addClass("moveCircle");
															next();

														});
													
													});

												});

											});

										});

									});

								});

							});

						});

					});

				});

			});

		}, );

		// setTimeout(function () {
		// 	$(".lines span.vertical").addClass("opa100");
		// 	$(".lines span.horizontal").addClass("opa100");
		// 	$(".outline img").removeClass("opa100");
		// }, 2000);

		// setTimeout(function () {
		// 	$(".outline img").addClass("opa100");
		// 	$(".grayscale img").removeClass("opa100");
		// }, 3000);

		// setTimeout(function () {
		// 	$(".grayscale img").addClass("opa100");
		// 	$(".colour img").removeClass("opa100");
		// }, 4500);


		// setTimeout(function () {
		// 	$(".colour img").addClass("opa100");
		// }, 6000);

		// setTimeout(function () {
		// 	$(".loading").addClass("upLoading, minusZIndex");
		// }, 6500);

		// setTimeout(function () {
		// 	$(".greyBackground > div > span").removeClass("hideBackground");
		// }, 7000);

		// setTimeout(function () {
		// 	$(".greyBackground").removeClass("loadingBigger");
		// 	$("header h1").removeClass("fromtopleft");
		// 	$("header nav, header .dots").removeClass("fromtopright");
		// 	$("#social").removeClass("frombottomleft");
		// 	$(".pagination").removeClass("fromcenterright");
		// 	$("#work").addClass("changeIndex");
		// }, 8000);


		// setTimeout(function () {

		// 	$("#work h1").removeClass("textAni");
		// }, 9000);
		// setTimeout(function () {
		// 	$(".what").removeClass("textAni");
		// }, 9200);
		// setTimeout(function () {
		// 	$(".briefInfo").removeClass("textAni");
		// 	$("#work .next .bg").removeClass("fromtopleft");
		// 	$("#work .prev .bg").removeClass("frombottomleft");
		// 	$("#work .prev .bg").addClass("noMore");
		// }, 9500);
		// setTimeout(function () {
		// 	$("#work ul li .groupping2 a").removeClass("listLink");
		// }, 9200);
		// setTimeout(function () {
		// 	$("#work ul li .groupping2 a").removeClass("tenSec");
		// 	$("#work ul li.active .groupping2 a").addClass("moveCircle");
		// }, 10000);
		$(".lines span.vertical").addClass("fiveSeconds");
		// $(".lines span.horizontal").removeClass("horizontalNo");

	});


		$("header nav a").click(function(){
			var getIndex = $(this).index();
			$("#work").addClass("navClicked");
			$("header h1").addClass("headertoleft");
			$("header nav").addClass("navAtoleft, active");
			$("#social").addClass("headertoleft");
			$(".greyBackground").addClass("navClicked");

			if ( getIndex == 0) {
				$("#about .blocking, #about .main").removeClass("abouttoleft");
				$("#contact .blocking, #contact .main").addClass("abouttoleft");
			} else if (getIndex == 2) {
				$("#about .blocking, #about .main").addClass("abouttoleft");
				$("#contact .blocking, #contact .main").removeClass("abouttoleft");
			} else if (getIndex == 1) {
				$("#work").removeClass("navClicked");
				$("header h1").removeClass("headertoleft");
				$("header nav").removeClass("navAtoleft, active");
				$("#social").removeClass("headertoleft");
				$(".greyBackground").removeClass("navClicked");
				$("#about .blocking, #about .main").addClass("abouttoleft");
				$("#contact .blocking, #contact .main").addClass("abouttoleft");
				$("header .groupping").removeClass("active");
				$("header .dots").addClass("active");
			}

			return false;
		});

		$("#about .close, #contact .close").click(function(){
			$("#contact .blocking, #contact .main").addClass("abouttoleft");
			$("#about .blocking, #about .main").addClass("abouttoleft");
			$("#work").removeClass("navClicked");
			$("header h1").removeClass("headertoleft");
			$("header nav").removeClass("navAtoleft");
			$("#social").removeClass("headertoleft");
			$(".greyBackground").removeClass("navClicked");
			$("header .dots").addClass("active");

			return false;
		});

		$("#work > ul > li > .groupping2 > a").click(function(){
			$(this).parent().parent().find(".seeDesign").removeClass("moveToLeft");
			$(this).parent().parent().find(".seeDesign .designGroupping2 .innerGroupping2").scrollTop(0); // For Safari
			$("#work").removeClass("changeIndex");

			return false;
		});

		$("#work .seeDesign p.close").click(function(){
			$(this).parent().parent().find(".seeDesign").addClass("moveToLeft");
			$("#work").addClass("changeIndex");
			$("#work > ul > li .innerGroupping").scrollTop(0);
			return false;
		});

		$(".pagination > span").click(function(){

			$(this).addClass("active");
			$(this).siblings().removeClass("active");

			
			var liNum = $(this).index();
			$("#work > ul > li").eq(liNum).addClass("active");
			$("#work > ul > li").eq(liNum).siblings().removeClass("active");
			$("#work > ul > li").eq(liNum).find(".groupping2 a").addClass("moveCircle");
			$("#work > ul > li").eq(liNum).siblings().find(".groupping2 a").removeClass("moveCircle");

			if (liNum == 0 ) {
				$(".prev .bg").addClass("noMore");
				$(".next .bg").removeClass("noMore");
			} else if (liNum == 4) {
				$(".next .bg").addClass("noMore");
				$(".prev .bg").removeClass("noMore");
			} else {
				$(".prev .bg").removeClass("noMore");
				$(".next .bg").removeClass("noMore");
			}

			return false;
		});

		$(".next .bg").click(function(){
			liNum = $("#work > ul > li.active").index();

			$("#work > ul > li").removeClass("active");
			$("#work > ul > li").eq(liNum+1).addClass("active");
			$(".pagination > span").removeClass("active");
			$(".pagination > span").eq(liNum+1).addClass("active");
			$(".prev .bg").removeClass("noMore");
			$(this).removeClass("noMore");
			if (liNum == 4) {
				$("#work > ul > li").removeClass("active");
				$("#work > ul > li").eq(4).addClass('active');
				$(".pagination > span").eq(4).addClass("active");
			} else if (liNum == 3) {
				$(this).addClass("noMore");
				$(".prev .bg").removeClass("noMore");
			} else { 
				$(this).removeClass("noMore");
			}

			return false;
		});

		$(".prev .bg").click(function(){
			liNum = $("#work > ul > li.active").index();

			$("#work > ul > li").removeClass("active");
			$("#work > ul > li").eq(liNum-1).addClass("active");
			$(".pagination > span").removeClass("active");
			$(".pagination > span").eq(liNum-1).addClass("active");
			$(".next .bg").removeClass("noMore");
			if (liNum == 0) {
				$("#work > ul > li").removeClass("active");
				$("#work > ul > li").eq(0).addClass('active');
				$(".pagination > span").eq(0).addClass("active");
			} else if (liNum == 1) {
				$(this).addClass("noMore");
				$(".next .bg").removeClass("noMore");
			} else {
				$(this).removeClass("noMore");
			}

			return false;
		});


		$("header .dots").click(function(){
			$(this).hide();
			$("header .groupping, #social, #social a, #wrapper nav").addClass("active");

			return false;
		});

		$("header .groupping .dots").click(function(){
			$("header .groupping, #social, #social a, #wrapper nav").removeClass("active");
			$("header .dots").show();
			return false;
		});

		$(function(){
  	  	var hasBeenTrigged = false;
    	$("#work .innerGroupping").scroll(function() {
	        if ($(this).scrollTop() >= 100 && !hasBeenTrigged) { // if scroll is greater/equal then 100 and hasBeenTrigged is set to false.
	            $("#work .designGroupping2 .img").addClass("scrolled");
	 			$("#work .designGroupping2 .innerGroupping2").addClass("eight00");

	            hasBeenTrigged = true; 
	        } else if ($(this).scrollTop() <= 99 && hasBeenTrigged) {
	        	$("#work .designGroupping2 .img").removeClass("scrolled");
	 			$("#work .designGroupping2 .innerGroupping2").removeClass("eight00");
	 			hasBeenTrigged = false;
	        }
   		 });

    	$(".arrowDown").click(function(){
    		$("#work .designGroupping, #work .designGroupping h2, #work .seeDesign .visitSite, #work .designGroupping .innerGroupping, #work .designGroupping .forRel").removeClass("active");
			$("#work .openSans, #work .designGroupping .descrip, #work h4.openSans, #work .designGroupping ul, #work .newGroupping, .tapToSee p, .tapToSee").removeClass("active");
			$(this).addClass("hide");
			$(".arrowDown2").removeClass("hide");
    		return false;
    	});

    	$(".arrowDown2").click(function(){
    		$("#work .designGroupping, #work .designGroupping h2, #work .seeDesign .visitSite, #work .designGroupping .innerGroupping, #work .designGroupping .forRel").addClass("active");
			$("#work .openSans, #work .designGroupping .descrip, #work h4.openSans, #work .designGroupping ul, #work .newGroupping, .tapToSee p, .tapToSee").addClass("active");
			$(this).addClass("hide");
			$(".arrowDown").removeClass("hide");
    		return false;
    	});


    	$(".tapToSee").click(function(){
    		$("#work .designGroupping, #work .designGroupping h2, #work .seeDesign .visitSite, #work .designGroupping .innerGroupping, #work .designGroupping .forRel").addClass("active");
			$("#work .openSans, #work .designGroupping .descrip, #work h4.openSans, #work .designGroupping ul, #work .newGroupping, .tapToSee p").addClass("active");
			$(this).addClass("hide");
			$(this).addClass("active")

			if ($(".arrowDown").hasClass("hide")) {
				$(".arrowDown2").addClass("hide");
				$(".arrowDown").removeClass("hide");
			} else if (!$(".arrowDown").hasClass("hide")) {
				$(".arrowDown").addClass("hide");
				$(".arrowDown2").removeClass("hide");
			}
			
			

    		return false;
    	});

    	var $window = $(window);


	    function checkWidth() {

	        var windowsize = $window.width();
	        var liNum = $("#work > ul > li.active").index();
	        if (windowsize < 1024) {
	   //      	if (liNum == 0) {
				// 	$(".prev .bg").addClass("noMore");
				// 	$(".next .bg").removeClass("noMore");
				// } else if (liNum == 4) {
				// 	$(".next .bg").addClass("noMore");
				// 	$(".prev .bg").removeClass("noMore");
				// }
	            $("#wrapper #work ul li .groupping2 a").removeClass("moveCircle");
			
	            $(function(){
		  	  	
		  	  	var hasBeenTrigged = false;
		    	$("#work .innerGroupping").scroll(function() {
			        if ($(this).scrollTop() >= 100 && !hasBeenTrigged) { // if scroll is greater/equal then 100 and hasBeenTrigged is set to false.
			            $("#work .designGroupping, #work .designGroupping h2, #work .seeDesign .visitSite, #work .designGroupping .innerGroupping, #work .designGroupping .forRel").addClass("active");
			            $("#work .openSans, #work .designGroupping .descrip, #work h4.openSans, #work .designGroupping ul, #work .newGroupping, .tapToSee p, .tapToSee").addClass("active");
			            $("#work .arrowDown").removeClass("hide");
			            hasBeenTrigged = true; 
			        } else if ($(this).scrollTop() <= 99 && hasBeenTrigged) {
			        	$("#work .designGroupping, #work .designGroupping h2, #work .seeDesign .visitSite, #work .designGroupping .innerGroupping, #work .designGroupping .forRel").removeClass("active");
			            $("#work .openSans, #work .designGroupping .descrip, #work h4.openSans, #work .designGroupping ul, #work .newGroupping, .tapToSee p, .tapToSee").removeClass("active");
			 			$("#work .arrowDown").addClass("hide");
			 			$("#work .arrowDown2").addClass("hide");
			 			hasBeenTrigged = false;
			        }
		   		 });
		    });

	        } else if (windowsize > 1024 && (!$("#work ul li.active .groupping2 a").hasClass("moveCircle"))) {
	        	$("#work ul li.active .groupping2 a").addClass("moveCircle");
	        } else if (windowsize < 650 && (!$("#work .designGroupping").hasClass("active"))) {
	        	// $(".tapToSee").removeClass("hide");
	        	$(".tapToSee").removeClass("active")
	        	$(".tapToSee p").removeClass("active");
	        } else if (windowsize < 650 && ($("#work .designGroupping").hasClass("active"))) {
	        	// $(".tapToSee").addClass("hide");
	        	$(".tapToSee").addClass("active")
	        	$(".tapToSee p").addClass("active");
	        }
	    }
	    // Execute on load
	    setTimeout(function () {
			checkWidth();
		}, 13000);
	    
	    // Bind event listener
	    $(window).resize(checkWidth);
	});







});
	

