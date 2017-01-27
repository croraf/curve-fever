var chatModule = (function(){

    var module = {};


    $("#chatForm").submit(function (e) {
        e.preventDefault();
        // Get input field values
        var text = $('input[name=text]').val();

        // Simple validation at client's end
        // We simply change border color to red if empty field using .css()
        var proceed = true;

        if (text === "") {
            return;
        } else {
            controlSocketModule.sendMessage("chatMessage", text);
            $('input[name=text]').val("");
        }

    });



    return module;
})();

