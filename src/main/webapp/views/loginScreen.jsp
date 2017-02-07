<!DOCTYPE HTML>

<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>

<html>
<head>
    <base href="${pageContext.request.contextPath}/" />

    <title>Log in</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/css/materialize.css">

    <link rel="stylesheet" type="text/css" href="static/style1.css" />
    <link rel="stylesheet" type="text/css" href="static/containerWithList.css" />

    <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.js"></script>
    <script>

        $( function(){

            $.getScript("https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/js/materialize.js");
            $.getScript("static/loginScreen/loginScreen.js");
        });
    </script>

</head>
<body>

    <div class="myContainer">

        <div class = "row">
            <div class = "col s4 offset-s4 section">
        	    <h3 class="center-align">Pick player</h3>
        	</div>
        </div>    
        
        <div class = "row">
            <div class = "col s4 offset-s4 center-align">

                <form action="services/login" method="post" id="loginScreenForm">
                            <sec:csrfInput />
                            <p>
                                <input type="text"
                                       name="name"
                                       class="center-align"
                                       maxlength="${usernameMaxLength}"
                                       autofocus
                                       autocorrect="off" autocapitalize="off" spellcheck="false"/>
                            </p>
                </form>

                <button type="submit"
                        form="loginScreenForm"
                        class="waves-effect waves-light btn">
                            submit
                </button>

            </div>
        </div>

    </div>

</body>
</html>