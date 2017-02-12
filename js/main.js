$.noConflict();



jQuery( document ).ready(function( $ ) {
  // Code that uses jQuery's $ can follow here.

	$(window).load(function(){


		$("#intro .groupping, #intro .groupping1").addClass("default");
		$("#intro .shadow").addClass("default");

		$("footer, header .menu, #border .border, header .sns, h1 a, header #lang").addClass("default");
		$("footer, header .menu, #border .border, header .sns, h1 a, header #lang, .greyBg p").addClass("transi");
		$("section").addClass("translateMinus");
		$("header .mainBg h4").addClass("leftMinus100");

		$("#work .groupping1 h2, #work .groupping1 ul li h3, #work ul ul, #work .groupping2 .bg").addClass("transi");
		$("#work ul ul").addClass("opa");
		$("#work .groupping1 h2, #work .groupping1 ul li h3").addClass("translateMinus");
		$("#work .groupping2 .bg, #work .groupping2 ul li").addClass("translatePlus");
		$("#work .groupping1").addClass("translateMinus");
		$("#work .groupping1 h3, #work .groupping2 ul li, #work .groupping1 h2").addClass("opa");
		

		$("#about .groupping2").addClass("transiSlower");
		$("#about .groupping2").addClass("default");
		$("#about .groupping1 h2").addClass("translateMinus");
		$("#about .groupping1 h2").addClass("transiSlower");
		$("#about .groupping1 p, #about .groupping1 h2").addClass("opa");
		$("#about .groupping1 p, #about .groupping1 h2").addClass("transiSlower");
		$("#about .groupping2 ul li").addClass("moveFromLeft");
		$("#about .groupping2 ul li").addClass("transiSlower");


		$("#contact .groupping2 p").addClass("default");
		$("#contact .groupping2 p").addClass("biggerFont");
		$("#contact .groupping2 p").addClass("smallerFont");
		$("#contact .groupping2 p").addClass("transi");
		$("#contact .groupping2").addClass("transiSlower");
		$("#contact .groupping2").addClass("translateMinus");
		

		$(".greyBg").delay(2000).queue(function(next) {
			$("section").addClass("transiSlower");
			$(".greyBg").addClass("lessIndex");
			$("footer, header .menu, #border .border, header .sns, h1 a, header #lang").removeClass("default");
			$(".greyBg p").addClass("smaller");
			
			
		  next();
		});



		$("#intro").delay(3000).queue(function(next) {
			$("#intro").removeClass("translateMinus");

			$("#intro .groupping .groupping1").delay(600).queue(function(next) {
				$("#intro .groupping .groupping1").removeClass("default");
			  next();

				$("#intro .groupping").delay(800).queue(function(next) {
					$("#intro .groupping").addClass("ani");
					$("#intro .mainBg .shadow").removeClass("default");

				  next();

				  	$("#intro .groupping").delay(600).queue(function(next) {
						$("#intro .groupping").removeClass("ani");
						$("#intro .groupping").removeClass("default");
					  next();
						$("header .hoverBg").delay(1500).queue(function(next) {
							$(this).addClass("aniForHoverBg");
							$("header .menu .hidden").addClass("aniForHidden");
							$("header h2.menu").addClass("aniForMenu");
							next();
						});
					});

				});
			});
		  next();
		});

	});

	$(document).ready(function(){


		// menu hover

		$("header h2.menu").mouseenter(function(){
			$(this).removeClass("aniForMenu");
			$("header .hoverBg").removeClass("aniForHoverBg");
			$("header .hidden").removeClass("aniForHidden");

			if ($("header .mainBg").hasClass("active")) {
				$("header .hoverBg").removeClass("hover");
			} else {

				$("header .hoverBg").addClass("hover");
			}

		}); 

		$(".hoverBg").mouseenter(function(){
			$("header h2.menu").removeClass("aniForMenu");
			$("header .hoverBg").removeClass("aniForHoverBg");
			$("header .hidden").removeClass("aniForHidden");
		});

		$("header h2.menu").mouseleave(function(){
			$("header .hoverBg").removeClass("hover");

		}); 

		// when menu clicked

		$("header h2.menu").click(function(){

			$("header .hoverBg").removeClass("hover");
			$("header .mainBg").addClass("active");
			$(this).addClass("active");
			$("header .mainBg h4").removeClass("leftMinus100");

			return false;
		});

		$("header h4").click(function(){

			$("header .hoverBg").removeClass("hover");
			$("header .mainBg").removeClass("active");
			$("h2.menu").removeClass("active");
			$("header .mainBg h4").addClass("leftMinus100");

			return false;
		});


		// nav a

		$("nav a").click(function(){

			$(this).addClass("active");
			$(this).siblings().removeClass("active");
			$("header .mainBg").removeClass("active");
			$("header .mainBg h4").addClass("leftMinus100");
			$("h2.menu").removeClass("active");
			$("section").addClass("translateMinus");
			$("header h1 a").removeClass("active");

			$("#work .groupping1, #work .groupping1 h2, #work .groupping1 ul li h3").addClass("translateMinus");
			$("#work .groupping1 h3, #work .groupping2 ul li, #work .groupping1 h2, #work ul ul").addClass("opa");
			$("#work .groupping1 h2, #work .groupping1 ul li h3, #work ul ul").addClass("transi");
			$("#work .groupping2 .bg, #work .groupping2 ul li").addClass("translatePlus");

			$("#about .groupping2").addClass("default");
			$("#about .groupping1 h2").addClass("translateMinus");
			$("#about .groupping1 p, #about .groupping1 h2").addClass("opa");
			$("#about .groupping2 ul li").addClass("moveFromLeft");

			$("#contact .groupping2 p").addClass("default");
			$("#contact .groupping2 p").addClass("biggerFont");
			$("#contact .groupping2 p").addClass("transi");
			$("#contact .groupping2").addClass("translateMinus");
			$("#contact .groupping2 p").addClass("smallerFont");
			$("#contact .groupping1").removeClass("aniForSpan");
			$("#contact .groupping1 h3").find(".first").html("THANK");
			$("#contact .groupping1 h3").find(".second").html("YOU");

			$("#intro .groupping, #intro .groupping1").addClass("default");
			$("#intro .shadow").addClass("default");
			$("#intro").addClass("translateMinus");


			$("#intro").delay(1000).queue(function(next) {
				
				$("#intro").removeClass("active");
				$("#intro").addClass("translateMinus");
			});

			if ( $(this).index() == 0 ) {
				$(".subBg").removeClass("contactBorder");
				$("header .mainBg h4").removeClass("contactClose");
				$(".subBg").removeClass("workBorder");
				$("header .mainBg h4").removeClass("workClose");

				$("html").removeClass("undoOverflow");
				$("body").removeClass("undoOverflow");
				$("#about").addClass("active");
				$("#about").delay(1000).queue(function(next) {
					$(this).siblings().removeClass("active");
					$("#about").removeClass("translateMinus");
					

					$("#about .groupping2").delay(1000).queue(function(next) {

						$("#about .groupping2").removeClass("default");
						$("#about .groupping2 ul li").removeClass("moveFromLeft");
						next();
						$("#about").delay(1500).queue(function(next) {
							$("#about .groupping1 h2").removeClass("translateMinus");
							$("#about .groupping1 h2").removeClass("opa");

							$("#about").delay(1000).queue(function(next) {
								$("#about .groupping1 p").removeClass("opa");
								next();
							});
							next();
						});
					});
					next();
				});

				$(".greyBg p").html("ABOUT");

			} else if ( $(this).index() == 1 ) {

				var i = 0;
				var list = $("#work .groupping2 ul li");

				function show() {
				    if (i < list.length) {
				        $(list[i]).removeClass("translatePlus");
				         $(list[i]).removeClass("opa");
				        i++;
				        setTimeout(show, 400);
				    }       
				}
				$(".greyBg p").html("WORK");


				$("#work").addClass("active");
				$("#work").delay(1000).queue(function(next) {
					$(".subBg").removeClass("contactBorder");
					$("header .mainBg h4").removeClass("contactClose");
					$(".subBg").addClass("workBorder");
					$("header .mainBg h4").addClass("workClose");

					$(this).siblings().removeClass("active");

					$("#work").removeClass("translateMinus");
					

					$("#work .bg").delay(1000).queue(function(next) {
						$("#work .bg").removeClass("translatePlus");
						$("#work .groupping1").removeClass("translateMinus");
					  next();

					  	$("#work .groupping2 ul li").delay(600).queue(function(next) {
							$("#work .groupping1 h2").removeClass("translateMinus");
							$("#work .groupping1 h2").removeClass("opa");

							$("html").addClass("undoOverflow");
							$("body").addClass("undoOverflow");

					  		next();

							$("#work").delay(600).queue(function(next) {
					  			$("#work .groupping1 ul li h3").removeClass("translateMinus");
							  	$("#work .groupping1 ul li h3").removeClass("opa");
								
							  next();

							  	$("#work .groupping1 ul li h3").delay(600).queue(function(next) {
							  		
							  		$("#work .groupping1 ul ul").removeClass("opa");
									$("#work .groupping1 ul ul").removeClass("translateMinus");
							  		
									$("#work .groupping1 ul li h3").delay(300).queue(function(next) {
										show();
								  		
								  		$("#work .groupping1 ul ul").delay(600).queue(function(next) {
								  			// if ( $("#work .groupping2 ul li").eq(0).not("active") ) {
								  			// 	$("#work .groupping2 ul li").eq(0).addClass("active");
								  			// } else {

								  			// }
											
											
											next();
										});
									next();
									});

								  	next();
								});

							});
						});
					});
				  next();
				});

			} else if ( $(this).index() == 2 ) {
				$("html").removeClass("undoOverflow");
				$("body").removeClass("undoOverflow");
				$("#contact").addClass("active");
				$("#contact").delay(1000).queue(function(next) {

					$(".subBg").removeClass("workBorder");
					$("header .mainBg h4").removeClass("workClose");
					$(".subBg").addClass("contactBorder");
					$("header .mainBg h4").addClass("contactClose");

					$(this).siblings().removeClass("active");
					$("#contact").removeClass("translateMinus");
					


					$("#contact .groupping2").delay(1000).queue(function(next) {
						$("#contact .groupping2").removeClass("translateMinus");
						$("#contact .groupping2 p").removeClass("smallerFont");

						$("#contact .groupping2 p").delay(3000).queue(function(next) {
							$("#contact .groupping2 p").removeClass("default");
							$("#contact .groupping2 p").removeClass("biggerFont");

							$("#contact .groupping1").delay(800).queue(function(next) {
								$("#contact .groupping1").addClass("aniForSpan");
								$("#contact .groupping1").delay(3500).queue(function(next) {
									$("#contact .groupping1").removeClass("aniForSpan");

									$("#contact .groupping1 h3").delay(100).queue(function(next) {
										

										$("#contact .groupping1").delay(3500).queue(function(next) {
											$("#contact .groupping1").addClass("aniForSpan");
											$("#contact .groupping1 h3").find(".first").html("COME");
											$("#contact .groupping1 h3").find(".second").html("AGAIN");
											next();
										});
										next();
									});
									next();
								});
								next();
							});
							next();
						});
						next();
					});
					next();
				});

				$(".greyBg p").html("CONTACT");

			} 

			return false;
		});



		// header h1 a clicked

		$("header h1 a").click(function(){
			

			$(this).addClass("active");
			$("nav a").removeClass("active");
			$("html").removeClass("undoOverflow");
			$("body").removeClass("undoOverflow");
			$("header .mainBg").removeClass("active");
			$("header .mainBg h4").addClass("leftMinus100");
			$("h2.menu").removeClass("active");
			$("section").addClass("translateMinus");
			$(".greyBg p").html("WELCOME");

			$("#intro .groupping, #intro .groupping1").addClass("default");
			$("#intro .shadow").addClass("default");
			$("#intro").addClass("translateMinus");


			$("#contact .groupping1").removeClass("aniForSpan");
			$("#contact .groupping1 h3").find(".first").html("THANK");
			$("#contact .groupping1 h3").find(".second").html("YOU");

			

			$("#intro").addClass("active");

			$("header h1 a").delay(1000).queue(function(next) {
				$(".subBg").removeClass("contactBorder");
				$("header .mainBg h4").removeClass("contactClose");
				$(".subBg").removeClass("workBorder");
				$("header .mainBg h4").removeClass("workClose");
					
				$("#about, #work, #contact").removeClass("active");
				$("#intro").removeClass("translateMinus");

				$("#intro .groupping .groupping1").delay(600).queue(function(next) {
					$("#intro .groupping .groupping1").removeClass("default");
				  next();

					$("#intro .groupping").delay(800).queue(function(next) {
						$("#intro .groupping").addClass("ani");
						$("#intro .mainBg .shadow").removeClass("default");

					  next();

					  	$("#intro .groupping").delay(600).queue(function(next) {
							$("#intro .groupping").removeClass("ani");
							$("#intro .groupping").removeClass("default");
						  next();
						});
					});
				});
			  next();
			});


			return false;
		});

	

		$("#about .groupping2 > ul > li").mouseenter(function(){
			$(this).addClass("active");
			$(this).siblings().removeClass("active");


		});
		// scroll

		// var height = $(window).height();
		// var scrollTop = $(window).scrollTop();

		// $("#wrapper").on('mousewheel DOMMouseScroll', function (event) {
		// 	var count =  0;

		//     if (count == 0) {

		//     	$('#contact, #contact .mainBg').addClass('leftMinus100');

		// 		$('#intro .mainBg').removeClass('mainBgIn');
		//         $('#intro .mainBg').addClass('mainBgOut');
		//         $("#intro .mainBg").delay(3000).queue(function(next) {
		// 		  $(this).addClass("leftMinus100");
		// 		  next();
		// 		});

		//         $("#work .mainBg").addClass("leftMinus100");
		// 		$("#about .mainBg").addClass("leftMinus100");
		// 		$("#about .mainBg").delay(1000).queue(function(next) {
		// 		  $(this).addClass("mainBgIn");
		// 		  next();
		// 		});
		// 		$("#about .mainBg").delay(3000).queue(function(next) {
		// 		  $(this).removeClass("leftMinus100");
		// 		  next();
		// 		});
				
		// 		console.log(count);
		// 		$("html, body").removeClass("undoOverflow");
		// 		$("#work .groupping1").addClass("leftMinus100");

				

		//     } 

		// 	if ( $("#about .mainBg").hasClass("mainBgIn") ) {
		// 			count = 1;
		// 	}


		//     if (count == 1) {
 
		//     	$('#about .mainBg').removeClass('mainBgIn');
		//         $('#about .mainBg').addClass('mainBgOut');
		//         $("#about .mainBg").delay(3000).queue(function(next) {
		// 		  $(this).addClass("leftMinus100");
		// 		  next();
		// 		});

		// 		$("#work .mainBg").addClass("leftMinus100");
		// 		$("#work .mainBg").delay(1000).queue(function(next) {
		// 		  $(this).addClass("mainBgIn");
		// 		  next();
		// 		});
		// 		$("#work .mainBg").delay(3000).queue(function(next) {
		// 		  $(this).removeClass("leftMinus100");
		// 		  next();
		// 		});

		// 		$("body, html").delay(3000).queue(function(next) {
		// 		  $(this).addClass("undoOverflow");
		// 		  $("#work .groupping1").removeClass("leftMinus100");
		// 		  next();
		// 		});


		// 		console.log(count);

		// 	} else {
		    	
		//   //       $('#intro .mainBg').removeClass('mainBgOut');
		//   //       $("#intro .mainBg").delay(3000).queue(function(next) {
		// 		//   $(this).removeClass("leftMinus100");
		// 		//   next();
		// 		// });
		// 		// $('#intro .mainBg').addClass('mainBgIn');

		//     }

		//     if ( $("#work .mainBg").hasClass("mainBgIn") ) {
		// 			count = 2;
		// 	}


		//     if (count == 2) {
 
		//     	$('#work .mainBg').removeClass('mainBgIn');
		//         $('#work .mainBg').addClass('mainBgOut');
		//         $("#work .mainBg").delay(1000).queue(function(next) {
		// 		  $(this).addClass("leftMinus100");
		// 		  next();
		// 		});

		// 		$("#contact .mainBg").addClass("leftMinus100");
		// 		$("#contact .mainBg").delay(1000).queue(function(next) {
		// 		  $(this).addClass("mainBgIn");
		// 		  next();
		// 		});
		// 		$("#contact .mainBg").delay(3000).queue(function(next) {
		// 		  $(this).removeClass("leftMinus100");
		// 		  $("#contact").removeClass("leftMinus100");
		// 		  next();
		// 		});

		// 		$("body, html").delay(500).queue(function(next) {
		// 		  $(this).removeClass("undoOverflow");
		// 		  $("#work .groupping1").addClass("leftMinus100");
		// 		  next();
		// 		});


		// 		console.log(count);

		// 	}

		// });


		

		// #work li a 

		$("#work .groupping2 ul li").mouseenter(function(){
			$(this).addClass("active");
			$(this).siblings().removeClass("active");
			return false;
		});

	});




});
	

