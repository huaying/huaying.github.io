var Auth = {
        store: localStorage
        ,login: function(){
            this.store.login = 1;
        }
        ,logout: function(){
            delete this.store.login;
        }
        ,check: function(){
            if(typeof this.store.login === "undefined"){
                return false;
            }
            return true;
        }
        ,redir: function(){
            $(location).attr(
                    'href'
                    ,'signin_redir.html?r='
                    +encodeURIComponent(location.pathname)
                    );
        }
        ,init:function(){
            if(!this.check()){
                console.log('redirect');
                this.redir();
            }
            console.log('don\'t redirect');
        }
    }
    ,GetURLParameter = function(sParam){
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++) 
        {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam) 
            {
                return sParameterName[1];
            }
        }
    }
    ;

$(document).off('pagebeforeshow').on('pagebeforeshow', function(){
    var page = $(':mobile-pagecontainer').pagecontainer('getActivePage')[0]
       ,redir_page = function(){
            if(GetURLParameter('r')){
                return GetURLParameter('r').replace(/^.*[%2F]/, '');
            }
            return "index.html";
       }()
       ,noLoginBtn = function(){
            return ($(page).find('.login-btn').length)?false:true;
       }
       ,noNeedLogin = function(){
            return $(page).hasClass('no_login');
       }
    
    if(noLoginBtn() && !noNeedLogin()){
        Auth.init();
    }
    $(page).find('.menu-bar>ul').find('.logout-btn').remove();
    $(page).find('.menu-bar>ul').find('#log-in').remove();
    
    if(Auth.check()){
        $(page).find('.menu-bar>ul').append('<li><a href="#" style="background-color: #555555;color: white;" class="logout-btn">Log Out</a></li>');
    }else{
        $(page).find('.menu-bar>ul').append('<li><a href="signin.html" id="log-in">Log In</a></li>');
        $(page).find('#index_first_link').attr('href','eventdetail_withoutjoin.html');
    }

    $('.login-btn').off('click').on('click',function(){
        if(!$('#email').val()){
            $('#email_error').show();
        }else{
            $('#email_error').hide();
        }
        if(!$('#passwd').val()){
            $('#passwd_error').show();
        }else{
            $('#passwd_error').hide();
        }
        
        if($('#email').val() && $('#passwd').val()){
            Auth.login();
            location.href = redir_page;
        }
    });
    $('.logout-btn').off('click').on('click',function(){
        Auth.logout();
        location.href = redir_page;
    });
    
});
