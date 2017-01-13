<!DOCTYPE HTML>

<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<html>
<head>
    <base href="${pageContext.request.contextPath}/" />

    <title>Player entered</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/css/materialize.min.css">


    <link rel="stylesheet" type="text/css" href="static/style1.css" />
    <link rel="stylesheet" type="text/css" href="static/containerWithList.css" />
    <link rel="stylesheet" type="text/css" href="static/loginSuccess/loginSuccess.css" />

</head>

<body>
    <div id = "container">

        <div id = "playersListCollumn">

                <h5 class="center-align">All players</h5>

                <div id = "playersList" class="glowingShaddow center-align collection scrollbar-style-2">
                </div>

        </div>

        <div id = "pickedPlayerCollumn">

            <h4 class="center-align">Login success!</h4>

            <p> Id: ${player.id} </p>
            <p> Name: ${player.name} </p>
            <p> Points: ${player.points} </p>
            <p> Coins: ${player.coins} </p>

            <p><a href="services/pregame">Pick another player</a></p>
            <p><a href="services/pregame/enter/${player.id}">Go to battlefield</a></p>
        </div>
    </div>

    <!--Import jQuery before materialize.js-->
	<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/js/materialize.min.js"></script>
    <script type="text/javascript" src="static/loginSuccess/loginSuccess.js"></script>
</body>
</html>