$(document).on('pagebeforecreate', function(){  

	console.log("in page before create");
    showMenu();
	showSearch();
    slideLeft();
    resetBars();
    
    $(document).find('a[href="createevent2.html"]').attr('data-ajax','false');
    $(document).find('a[href="friend_detail.html"]').attr('data-ajax','false');
    $(document).find('a[href="Bellaprofile.html"]').attr('data-ajax','false');
    $(document).find('a[href="Alexaprofile.html"]').attr('data-ajax','false');
    $(document).find('a[href="eventdetail.html"]').attr('data-ajax','false');
    $(document).find('a[href="eventdetail2.html"]').attr('data-ajax','false');
    $(document).find('a[href="eventdetail.html?m=1"]').attr('data-ajax','false');
    $(document).find('a[href="eventdetail2.html?m=1"]').attr('data-ajax','false');
    $(document).find('a[href="index.html"]').attr('data-ajax','false');
    $(document).find('a[href="event_academic.html"]').attr('data-ajax','false');
    $(document).find('a[href="event_sports.html"]').attr('data-ajax','false');
    $(document).find('a[href="event_fun.html"]').attr('data-ajax','false');
    $(document).find('a[href="event_shopping.html"]').attr('data-ajax','false');
    $(document).find('a[href="event_dinning.html"]').attr('data-ajax','false');
    $(document).find('a[href="myevent.html"]').attr('data-ajax','false');
    $(document).find('a[href="recomemdedevents.html"]').attr('data-ajax','false');
    $(document).find('a[href="upcoming_event.html"]').attr('data-ajax','false');
    $(document).find('a[href="event_history.html"]').attr('data-ajax','false');
    $(document).find('a[href="eventdetail_sports.html"]').attr('data-ajax','false');
    $(document).find('a[href="eventdetail_dining.html"]').attr('data-ajax','false');
    
    $('#event-academic').on('pageinit', function() {
        startDown();
        //$(".ui-filterable").css("top", "50px");
    });
    
    $('#event-sports').on('pageinit', function() {
        startDown();
        //$(".ui-filterable").css("top", "50px");
    });
    
    $('#event-dining').on('pageinit', function() {
        startDown();
        //$(".ui-filterable").css("top", "50px");
    });
    
    $('#event-fun').on('pageinit', function() {
        startDown();
        //$(".ui-filterable").css("top", "50px");
    });
    
    $('#event-shopping').on('pageinit', function() {
        startDown();
        //$(".ui-filterable").css("top", "50px");
    });
    
});

function expandEventMenu() {
	if ($('.menu-event-expand').css("display") == "none") {
		$("#menu-event-expand-btn").removeClass("ui-icon-plus");
		$("#menu-event-expand-btn").addClass("ui-icon-minus");
	} else {
		$("#menu-event-expand-btn").removeClass("ui-icon-minus");
		$("#menu-event-expand-btn").addClass("ui-icon-plus");
	}
    $('.menu-event-expand').slideToggle();
	
}

function expandFriendMenu() {
	if ($('.menu-friend-expand').css("display") == "none") {
		$("#menu-friend-expand-btn").removeClass("ui-icon-plus");
		$("#menu-friend-expand-btn").addClass("ui-icon-minus");
	} else {
		$("#menu-friend-expand-btn").removeClass("ui-icon-minus");
		$("#menu-friend-expand-btn").addClass("ui-icon-plus");
	}
    $('.menu-friend-expand').slideToggle();
}

function toggleAdvancedMenu() {
	if ($(".expand-advanced-btn").css("top") == "110px") {
		expandAdvancedMenu();
	} else {
		hideAdvancedMenu();
	}
}


function expandAdvancedMenu() {
	$(".expand-advanced-btn").animate({top: "273px"}, "fast");
	$(".date-slider").animate({top: "110px"}, "fast");
    $(".time-slider").animate({top: "160px"}, "fast"); 
	$(".ui-filterable").animate({top: "210px"} ,"fast");
    $(".btn-edit").animate({top: "180px"} ,"fast");
    $(".event-details-plus").animate({top: "180px"}, "fast");
    $(".ui-content").animate({marginTop: "275px"}, "fast");
	$(".expand-advanced-btn").removeClass("ui-icon-carat-d");
    $(".expand-advanced-btn").addClass("ui-icon-carat-u");
}

function hideAdvancedMenu() {
	$(".ui-filterable").animate({top: "-20px"} ,"fast");
	$(".expand-advanced-btn").animate({top: "110px"}, "fast");
	$(".date-slider").animate({top: "-20px"}, "fast");
    $(".time-slider").animate({top: "-20px"}, "fast"); 
    $(".btn-edit").animate({top: "60px"} ,"fast");
    $(".event-details-plus").animate({top: "70px"}, "fast");
    $(".ui-content").animate({marginTop: "110px"}, "fast");
	$(".expand-advanced-btn").removeClass("ui-icon-carat-u");
    $(".expand-advanced-btn").addClass("ui-icon-carat-d");
}


function showMenu() {
    $(".menu-btn").click(function(){
    	if ($(".menu-bar").css("left") == "0px") {
        	slideLeft();
    	} else {
        	slideRight();
    	}    
  	});  
}


function showSearch() {  
    $(".search-btn").click(function(){
    	if ($(".category-bar").css("top") == "-20px") {
        	slideDown();       
    	} else {
        	slideUp();
    	}
  	});  
}

function resetBars() {
	$(".menu-bar").css("left", "-185px");
    $(".category-bar").css("left", "0px");
	$(".expand-advanced-btn").css("left", "0px");
    $(".ui-content").css("margin-left", "0px");    
    $(".ui-filterable").css("margin-left", "0px");
    $(".btn-edit").css("left", "255px");
    $(".event-details-plus").css("right", "-1px");
    
    $(".menu-bar").css("top", "50px");
    $(".category-bar").css("top", "-20px");
	$(".expand-advanced-btn").css("top", "-20px");
    $(".date-slider").css("top", "-20px");
    $(".time-slider").css("top", "-20px");
	$(".ui-filterable").css("top", "-20px");
    $(".btn-edit").css("top", "50px");
    $(".event-details-plus").css("top", "60px");
    $(".ui-content").css("margin-top", "48px");
    
    $(".menu-btn").removeClass("ui-icon-carat-d");
    $(".menu-btn").addClass("ui-icon-carat-l");
	$(".expand-advanced-btn").removeClass("ui-icon-carat-u");
    $(".expand-advanced-btn").addClass("ui-icon-carat-d");
	
    $(".menu-event-link").unbind('click').bind('click', expandEventMenu);
    $(".menu-friend-link").unbind('click').bind('click', expandFriendMenu);
	$(".expand-advanced-btn").unbind('click').bind('click', toggleAdvancedMenu);
    //$(".menu-expand-btn").css("display", "none");
}


function slideLeft() {
	$(".menu-bar").animate({left: "-185px"}, "fast");
    $(".ui-content").animate({marginLeft: "0px"}, "fast");
    $(".create-1-event-list .ui-filterable").animate({left: "0px"}, "fast");
    $(".category-bar").animate({left: "0px"}, "fast");
	$(".expand-advanced-btn").animate({left: "0px"}, "fast");
    $(".btn-edit").animate({left: "255px"}, "fast");
    $(".event-details-plus").animate({right: "-1px"}, "fast");
    $(".date-slider").animate({left: "0px"}, "fast");
    $(".time-slider").animate({left: "0px"}, "fast");
    $(".menu-btn").removeClass("ui-icon-carat-d");
    $(".menu-btn").addClass("ui-icon-carat-l");
}

function slideRight() {
	$(".menu-bar").animate({left: "0px"}, "fast");
    $(".ui-content").animate({marginLeft: "185px"}, "fast");
    $(".create-1-event-list .ui-filterable").animate({left: "185px"}, "fast");
    $(".category-bar").animate({left: "185px"}, "fast");
	$(".expand-advanced-btn").animate({left: "185px"}, "fast");
    $(".btn-edit").animate({left: "405px"}, "fast");
    $(".event-details-plus").animate({right: "-30px"}, "fast");
    $(".date-slider").animate({left: "185px"}, "fast");
    $(".time-slider").animate({left: "185px"}, "fast");      
    $(".menu-btn").removeClass("ui-icon-carat-l");
    $(".menu-btn").addClass("ui-icon-carat-d");
}


function slideDown() {
	$(".expand-advanced-btn").removeClass("ui-icon-carat-u");
    $(".expand-advanced-btn").addClass("ui-icon-carat-d");
	
	$(".category-bar").animate({top: "50px"}, "fast");
	$(".expand-advanced-btn").animate({top: "110px"}, "fast");
	//$(".date-slider").animate({top: "-10px"}, "fast");
    //$(".time-slider").animate({top: "-10px"}, "fast"); 
	//$(".ui-filterable").animate({top: "-10px"} ,"fast");
       
    $(".btn-edit").animate({top: "60px"} ,"fast");
    $(".event-details-plus").animate({top: "70px"}, "fast");
    $(".ui-content").animate({marginTop: "118px"}, "fast");
}

function slideUp() {
	$(".ui-filterable").animate({top: "-20px"}, "fast");
	$(".category-bar").animate({top: "-20px"}, "fast");
	$(".expand-advanced-btn").animate({top: "-20px"}, "fast");
	$(".date-slider").animate({top: "-20px"}, "fast");
    $(".time-slider").animate({top: "-20px"}, "fast"); 
    $(".btn-edit").animate({top: "50px"} ,"fast");
    $(".event-details-plus").animate({top: "60px"}, "fast");
    $(".ui-content").animate({marginTop: "48px"}, "fast");
}

function startDown() {
	$(".category-bar").css("top", "50px");
	$(".expand-advanced-btn").css("top", "110px");
   // $(".date-slider").css("top", "110px");
   // $(".time-slider").css("top", "160px");
	//$(".ui-filterable").css("top", "210px");
    $(".btn-edit").css("top", "180px");
    $(".event-details-plus").css("top", "180px");
    $(".ui-content").css("marginTop", "118px");
}


   urls = [
        "http://cdn.jtsage.com/datebox/latest/jqm-datebox.core.min.js",
        "http://dev.jtsage.com/cdn/datebox/latest/jqm-datebox.mode.flipbox.min.js",
        "./js/login.js",
        ];

      $.ajaxSetup({cache:true});
      for(i in urls){        
          $.ajax({
              url: urls[i],
              dataType: "script",
              async: false
          });
      }
