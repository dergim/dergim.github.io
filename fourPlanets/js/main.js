$.noConflict();
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



});






