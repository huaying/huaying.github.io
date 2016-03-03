$(document).on('pagebeforecreate', function(){
    
    $(".menu-bar").css("left", "-185px");
    $(".category-bar").css("left", "0px");
    $(".ui-content").css("margin-left", "0px");    
    $(".ui-content form").css("margin-left", "0px");
    $(".btn-edit").css("left", "255px"); 
    
    $(".menu-bar").css("top", "50px");
    $(".category-bar").css("top", "-10px");
    $(".ui-content").css("margin-top", "50px");
    $(".ui-content form").css("top", "-10px");
    $(".btn-edit").css("top", "50px"); 
    
    showMenu();
    showSearch();

});

function showMenu() {
    
    $(".menu-btn").click(function(){
    $menuBar = $(".menu-bar");
    if ($menuBar.css("left") == "0px") {
        // slide back left
        $menuBar.animate({left: "-185px"}, "fast");
        $(".ui-content").animate({marginLeft: "0px"}, "fast");
        $(".ui-content form").animate({left: "0px"}, "fast");
        $(".category-bar").animate({left: "0px"}, "fast");
        $(".btn-edit").animate({left: "255px"}, "fast");
        
        $(".menu-btn").removeClass("ui-icon-carat-d");
        $(".menu-btn").addClass("ui-icon-carat-l");
        
    } else {
        // slide forward right
        $menuBar.animate({left: "0px"}, "fast");
        $(".ui-content").animate({marginLeft: "185px"}, "fast");
        $(".ui-content form").animate({left: "185px"}, "fast");
        $(".category-bar").animate({left: "185px"}, "fast");
        $(".btn-edit").animate({left: "405px"}, "fast");
        
        $(".menu-btn").removeClass("ui-icon-carat-l");
        $(".menu-btn").addClass("ui-icon-carat-d");
    }    
  });
    
}


function showSearch() {
    
    $(".search-btn").click(function(){
    var $categoryBar = $(".category-bar");
    if ($categoryBar.css("top") == "-10px") {
        // slide down
        $categoryBar.animate({top: "100px"}, "fast");
        $(".ui-content").animate({marginTop: "138px"}, "fast");        
        $(".ui-content form").animate({top: "50px"} ,"fast");
        $(".btn-edit").animate({top: "150px"} ,"fast");

    } else {
        // slide up
        $categoryBar.animate({top: "-10px"}, "fast");
        $(".ui-content").animate({marginTop: "50px"}, "fast");
        $(".ui-content form").animate({top: "-10px"}, "fast");
        $(".btn-edit").animate({top: "50px"} ,"fast");
    }
  });
    
}
