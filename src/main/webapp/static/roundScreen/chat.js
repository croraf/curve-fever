var chatModule = (function(){

    var module = {};


    $("#chatForm").submit(function (e) {
        e.preventDefault();

        var text = $('input[name=text]').val();

        if (text === "") {
            return;
        } else {
            webSocketModule.sendMessage("chatMessage", text);
            $('input[name=text]').val("");
        }

    });



    return module;
})();

