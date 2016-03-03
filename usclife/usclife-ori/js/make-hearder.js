var header = ''
+'        <div data-role="panel" data-position="left" data-display="push" id="menu" class="menubar">'
           +' <a href="index.html" class="ui-btn ui-btn-b">Home</a>'
           +' <div data-role="collapsibleset" data-corners="false" data-iconpos="right" class="login-list"">'
           +'     <div data-role="collapsible" data-corners="false" data-collapsed-icon="arrow-d" data-expanded-icon="arrow-d">'
           +'         <h3 class="collpase-center">Event</h3>'
           +'         <ul class="collpase-center" data-role="listview" data-inset="false" data-icon="false">'
           +'             <li><a href="createevent.html">Create Events</a></li>'
           +'             <li><a href="myevent.html">My Events</a></li>'
           +'             <li><a href="upcoming_event.html">Upcoming Events</a></li>'
           +'             <li><a href="event_history.html">Event History</a></li>'
           +'             <li><a href="recomemdedevents.html">Recommended Events</a></li>'
           +'         </ul>'
           +'     </div>'
           +' </div>'
           +' <a href="friend.html" class="ui-btn ui-btn-b login-list"">Friend</a>'
           +' <a href="" class="ui-btn ui-btn-b logout-btn login-list">Logout</a>'
           +' <a href="signin.html" class="ui-btn ui-btn-b  logout-list">Sign in</a>'
           +' <a href="about.html" class="ui-btn ui-btn-b">About Us</a>'
           +' <a href="feedback.html" class="ui-btn ui-btn-b">Feedback</a>'
+'        </div>    '
        
        +' <div class="header-container">'
       +' <div data-role="header" class="header" style="background-color:#424242; color:#fff; border: 0; padding: 13px;">'
       +'     <a href="#menu" class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-btn-inline ui-icon-carat-l ui-btn-icon-notext" style="margin-top:5px;"></a>'
       +'     <div style="text-align:center">'
       +'     <h3 style="">USCLife</h3>'
       +'     </div>'
       +'     <a class="thumb-box ui-corner-all" href=""><img class="thumb" src=""/></a>'
       + '<div class="change-category" style="display:none"><img src="images/all.png"></div>'
       +' </div>'

       , store = localStorage
       , pagebeforeshow = function(){
           $('.menubar').panel('close').remove();
           $('.header').remove();
            $.mobile.activePage.prepend(header).trigger('create');
            
            if(typeof store.login === "undefined"){
                $('.thumb').attr('src','images/anony.png');
                $('.login-list').hide();
                $('.logout-list').show();
            }else{
                $('.thumb').attr('src','images/jacob.png');
                $('.login-list').show();
                $('.logout-list').hide();
            }
       }
       , user = function(){
            if(typeof store.login === "undefined"){
                console.log("not login");
                $.mobile.navigate("signin.html");
            }else{
                console.log("login");
                $.mobile.navigate("profile.html");
            }
         }
        ,login = function(){
            var semail = $('#email').val();
          if(semail.length==0)
          {
            alert ("Email field cannot be empty");
            $(location).attr('href','signin.html');
          }
          else
          {
          if(validateEmail(semail))
            {
            $(location).attr('href','index.html');
            store.login = 1;
            }
          else
           {
           alert("Enter a valid email address");
           $(location).attr('href','signin.html');
           }
          }
          
        }
        ,logout = function(){
            delete store.login;
            $(location).attr('href','index.html');
        }
        ,cate_judge = function(){
            var pageID = $.mobile.activePage.attr('id'),
                eventRelated = [
                    "main-page"
                    ,"ev_academic"
                    ,"ev_fun"
                    ,"ev_shopping"
                    ,"ev_sports"
                    ,"ev_dining"
                    ,"myevent"
                    ,"upcoming_event"
                    ,"event_history"
                    ,"event_recommended"
                    
                    ],
                title = $('#'+pageID).data('title');
                    ;
            if($.inArray(pageID,eventRelated)!= -1){
                console.log(title);
                if(typeof title !=="undefined"){
                    changeTitle(title);
                }
                showCategories();

                $(".change-category img").off('click').on('click',function () {
                    $(".category-bar").slideToggle(250);
                });
                $(".category-bar").slideToggle(250);
                if(pageID == "main-page" || pageID.substring(0,3)!="ev_"){
                    $(".change-category img").attr("src", "./images/all.png");
                }else{
                    $(".change-category img").attr("src", "./images/"+pageID.substring(3)+".png");
                }
            }else{
                $(".change-category img").off('click').hide();
            }
        }; 
   $(document).off('pagechange').on('pagechange',cate_judge)
              .off('pagebeforeshow').on('pagebeforeshow',pagebeforeshow)
              .off('click','.thumb').on('click','.thumb',user)
              .off('click','.login-btn').on('click','.login-btn',login)
              .off('click','.logout-btn').on('click','.logout-btn',logout)
              
              ;
    
   urls = [
        "http://cdn.jtsage.com/datebox/latest/jqm-datebox.core.min.js",
        "http://dev.jtsage.com/cdn/datebox/latest/jqm-datebox.mode.flipbox.min.js"
        ];

      $.ajaxSetup({cache:true});
      for(i in urls){        
          $.ajax({
              url: urls[i],
              dataType: "script",
              async: false
          });
      }
    
    function changeTitle(newTitle) {
        $(".header div h3").html(newTitle);
    }
    
    function showCategories() {
        $(".change-category").css("display", "block");
    }

  function validateEmail(email)
    {
      var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      if( !emailReg.test( email ) ) {
        return false;
      } else {
        return true;
    }
    }