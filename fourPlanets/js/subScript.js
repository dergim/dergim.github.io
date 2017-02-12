
jQuery( document ).ready(function( $ ) {
  // Code that uses jQuery's $ can follow here.


  // main menu 

  $("#mainMenu").click(function(){
  	$(".navBg, .navA").toggleClass("firstHide");

  	$(this).find("span:eq(0)").toggleClass("navTop");
  	$(this).find("span:eq(1)").toggleClass("navMid");
  	$(this).find("span:eq(2)").toggleClass("navBttm");

  	return false;
  });

  $(".btm .prevNext a.next").click(function(){

  	$(this).siblings().show();


  	return false;
  });





  // info planets


  // $("#talk a").click(function(){

  //     $(this).toggleClass("changeBg");

  //     $("#talkSection, .hideRightBtm, .hideRightTop").addClass("showNow");

  //     if ($(".hideRightBtm, .hideRightTop").hasClass("showNow")) {
  //       $(".hideRightBtm").show();
  //     } else {
  //       $(".hideRightBtm").hide();
  //       $(".hideRightBtm").removeClass("showNow");
  //   }
  //   return false;
  // });
  
  var getWidth = $(window).width();

  $(window).resize(function(){
    getWidth = $(window).width();

  });


  $("#talk a").click(function(){
    $("#talkSection").toggleClass("showNow");
    $(".hideRightBtm, .hideRightTop").toggleClass("showNow");

    if ($(".hideRightBtm, .hideRightTop").hasClass("showNow")) {
      $(".hideRightBtm, .hideRightTop").show();
    } else {
      $(".hideRightBtm, .hideRightTop").removeClass("showNow");
      $(".hideRightBtm, .hideRightTop").hide();
    }

    return false;
  });


  $("#talkSection ul#firstUl > li:last-child a").click(function(){
     $("#talkSection").removeClass("showNow");
     $(".hideRightBtm, .hideRightTop").removeClass("showNow");

    $(".hideRightBtm").hide();
    $(".hideRightTop").hide();
    return false;
  });




});


