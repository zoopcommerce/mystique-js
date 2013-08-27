define([], function(){
    // module:
    //		mystique/messages
    //
    return {
        load: function(id, require, callback){
            var jsonhttp = new XMLHttpRequest;
            jsonhttp.onreadystatechange=function(){
                if (jsonhttp.readyState==4 && jsonhttp.status==200) {
                    callback(JSON.parse(jsonhttp.responseText));
                }
            }
            jsonhttp.open("GET", require.baseUrl + "../mystique-common/translations/messages.json",true);
            jsonhttp.send();
        }
    };
});
