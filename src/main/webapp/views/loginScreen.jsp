<!DOCTYPE HTML>

<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<html>
<head>
    <base href="${pageContext.request.contextPath}/" />

    <title>Log in</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/css/materialize.min.css">

    <link rel="stylesheet" type="text/css" href="static/style1.css" />
    <link rel="stylesheet" type="text/css" href="static/containerWithList.css" />

</head>
<body>

    <div class="myContainer">

        <div class = "row">
            <div class = "col s4 offset-s4 section">
        	    <h4>Pick player</h4>
        	</div>
        </div>    
        
        <div class = "row">
            <div class = "col s4 offset-s4">

                <form action="services/login" method="post" id="loginScreen">
                            <p>
                                Name: <input type="text" name="name" />
                            </p>
                </form>

                <button type="submit" form="loginScreen" class="waves-effect waves-light btn">submit</button>

            </div>
        </div>

    </div>

    <!--Import jQuery before materialize.js-->
    <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/js/materialize.min.js"></script>


</body>
</html>