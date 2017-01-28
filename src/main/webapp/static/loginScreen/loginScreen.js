"use strict";

//@ sourceURL=loginScreen-dynamic.js



$("#loginScreenForm").submit(function(e) {

    $.ajax({
           type: "POST",
           url: "services/login",
           data: $("#loginScreenForm").serialize(), // serializes the form's elements.
           success: function(returnData)
           {
               $(".myContainer").html(returnData);



               $.getScript("static/loginSuccess/loginSuccess.js");
           }
         });

    e.preventDefault(); // avoid to execute the actual submit of the form.

});