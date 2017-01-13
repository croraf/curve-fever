<!DOCTYPE HTML>

<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<html>
<head>
    <base href="${pageContext.request.contextPath}/" />

    <title>Player entered</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

    <link rel="stylesheet" type="text/css" href="static/style1.css" />

</head>

<body>
	<h1>Player was successfully picked</h1>

    <p> Id: ${player.id} </p>
    <p> Name: ${player.name} </p>
    <p> Points: ${player.points} </p>
    <p> Coins: ${player.coins} </p>

    <p><a href="services/pregame">Pick another player</a></p>
    <p><a href="services/players">Go to battlefield</a></p>
</body>
</html>