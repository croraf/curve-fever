<!DOCTYPE HTML>

<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<head>
    <title>Log in</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <link rel="stylesheet" type="text/css" href="/static/style1.css" />
</head>
<body>
	<h1>All players</h1>

	<c:forEach items = ${players} var = "player">
	    <p>${player}</p>
	</c:forEach>

    <p><a href="/services/playersForm">Update another player.</a></p>
</body>
</html>