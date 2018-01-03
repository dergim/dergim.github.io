$.noConflict();
jQuery( document ).ready(function( $ ) {
  // Code that uses jQuery's $ can follow here.


  $(".loading .dots, #wrapper #banner h2.over1000, #banner h2.lets, #logIn, #banner .groupping, .mainNav, header h1, footer p, header .words").addClass("opa0");
  $(".black").addClass("blackAni");
  $("header .words").addClass("fromTop");
  $("#wrapper #banner h2.over1000, #banner h2.lets, #logIn").addClass("fromTopTwo");
  $("#banner .groupping, .mainNav, header h1, footer p").addClass("fromBtm");

  // loading animation

  $("body").delay(1000).queue(function(next){
  	$("header .planet.cre, .planet.pro").addClass("planetLeft");
  	$(".planet.eff, .planet.info").addClass("planetRight");
  	$(".loading .dots, #wrapper #banner h2.over1000, #banner h2.lets, #logIn, #banner .groupping, .mainNav, header h1, footer p, header .words").addClass("transitOne");
 	$(".black").addClass("transitHalf");

 	$(".loading .dots").eq(0).delay(1000).queue(function(next){
 		$(this).removeClass("opa0");
 		next();
 		$(".loading .dots").eq(1).delay(1000).queue(function(next){
 			$(".loading .dots").eq(0).addClass("opa0");
 			$(this).removeClass("opa0");
 			next();
	 		$(".loading .dots").eq(2).delay(1000).queue(function(next){
	 			$(this).removeClass("opa0");
	 			$(".loading .dots").eq(1).addClass("opa0");
	 			next();
		 		$(".loading .dots").eq(3).delay(1000).queue(function(next){
		 			$(this).removeClass("opa0");
		 			$(".loading .dots").eq(2).addClass("opa0");
		 			next();
			 		$(".loading .dots").eq(3).delay(1000).queue(function(next){
			 			$(this).addClass("opa0");
			 			next();

			 			// $(".black").eq(0).delay(1000).queue(function(next){
			 			// 	$(this).removeClass("blackAni");
			 			// 	next();

			 			// 	$(".black").eq(1).delay(500).queue(function(next){
				 		// 		$(this).removeClass("blackAni");
				 		// 		next();

				 		// 		$(".black").eq(2).delay(500).queue(function(next){
					 	// 			$(this).removeClass("blackAni");
					 	// 			next();

					 	// 			$(".black").eq(3).delay(500).queue(function(next){
						 // 				$(this).removeClass("blackAni");
						 // 				next();

									 	$(".loading").delay(1000).queue(function(next){
									 		$(this).fadeOut(2000);
									 		next();
									 		$("header .planet.cre").delay(500).queue(function(next){
									 			$(this).removeClass("planetLeft");
									 			next();

									 			$("header .planet.pro").delay(500).queue(function(next){
										 			$(this).removeClass("planetLeft");
										 			next();
										 			$("header .planet.eff").delay(500).queue(function(next){
											 			$(this).removeClass("planetRight");
											 			next();
											 			$("header .planet.info").delay(500).queue(function(next){
												 			$(this).removeClass("planetRight");
												 			next();
												 			$("header .words").delay(1000).queue(function(next){
													 			$(this).removeClass("opa0");
													 			$(this).removeClass("fromTop");
													 			next();

													 			$("#wrapper #banner h2.lets").delay(500).queue(function(next){
														 			$(this).removeClass("opa0");
														 			$(this).removeClass("fromTopTwo");
														 			next();
														 			$("#wrapper #banner h2.over1000").delay(300).queue(function(next){
															 			$("#logIn").removeClass("opa0");
															 			$("#logIn").removeClass("fromTopTwo");
															 			$(this).removeClass("opa0");
															 			$(this).removeClass("fromTopTwo");
															 			next();

															 			$("#banner .groupping").delay(300).queue(function(next){
																 			$("#banner .groupping, .mainNav, header h1, footer p").removeClass("opa0");
																 			$("#banner .groupping, .mainNav, header h1, footer p").removeClass("fromBtm");
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
						// 			});
						// 		});
						// 	});			 		
						// });
				 	});
				});
			});
		});
 	});
  	next();
  });

  // main menu 

  $("#mainMenu").click(function(){
  	$(".navBg, .navA").toggleClass("firstHide");

  	$(this).find("span:eq(0)").toggleClass("navTop");
  	$(this).find("span:eq(1)").toggleClass("navMid");
  	$(this).find("span:eq(2)").toggleClass("navBttm");

  	return false;
  });



});






