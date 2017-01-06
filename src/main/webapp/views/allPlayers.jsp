<!DOCTYPE HTML>

<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<head>
    <title>Battlefield</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <link rel="stylesheet" type="text/css" href="/static/style1.css" />
    <link rel="stylesheet" type="text/css" href="/static/battleScreen.css" />
</head>
<body>

	<div id = "board">
		<img src="/static/tableTop.jpg" height="520" width="600" title="battleField">
	</div>

	<div id = "playersList">
		<h1>All players</h1>

		<c:forEach items = "${players}" var = "player">
		    <p>Id: ${player.id},  Name: ${player.name},  Points: ${player.points},  Coins: ${player.coins} </p>
		</c:forEach>

	    <p><a href="/services/playersForm">Update another player.</a></p>
	</div>
	
</body>
</html>