define([], function(){
    // module:
    //      mystique/messages
    //
    return {
        load: function(id, require, callback){
            if (require.micro) {
                var jsonhttp = new XMLHttpRequest;
                jsonhttp.onreadystatechange=function(){
                    if (jsonhttp.readyState==4 && jsonhttp.status==200) {
                        callback(JSON.parse(jsonhttp.responseText));
                    }
                }
                jsonhttp.open("GET", require.baseUrl + "../mystique-common/translations/messages.json",true);
                jsonhttp.send();
            } else {
                //this is added to allow caching of messages strings in a dojo layer
                require(['dojo/text!mystique-common/translations/messages.json'], function(messages){
                    callback(JSON.parse(messages));
                })
            }
        }
    };
});
