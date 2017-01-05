<!DOCTYPE HTML>

<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<head>
    <title>Log in</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <link rel="stylesheet" type="text/css" href="/static/style1.css" />
</head>
<body>
	<h1>Update player</h1>

    <form:form action="/services/playersForm" method="post"
               modelAttribute = "player1">
    	<p>
    	    Name: <form:input type="text" path="name" /> <form:errors path="name" cssClass="error"/>
    	</p>
    	<!-- <p>
    	    Points: <form:input type="text" path="points" /> <form:errors path="points" cssClass="error" />
    	</p>
        <p>
            Coins: <form:input type="text" path="coins" /> <form:errors path="coins" cssClass="error" />
        </p> -->

        <p><input type="submit" value="Submit" /> <input type="reset" value="Reset" /></p>
    </form:form>
</body>
</html>