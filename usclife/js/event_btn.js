var GetURLParameter = function(sParam){
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
    };


if(GetURLParameter('m')){
   $('#event_btn').text('Manage').css({
        'background':'#19A9DE'
        ,'border':'3px solid rgb(130, 201, 201)'
        ,'width':'65px'
        ,'padding-right':'1em' 
   });

   $("#myPopupDialog #popupadd").hide();
   $("#myPopupDialog #popupleave").show();
}

if(GetURLParameter('h')){
    $('#event_btn').remove();
}
