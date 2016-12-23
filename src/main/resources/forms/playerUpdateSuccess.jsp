<!DOCTYPE HTML>

<!-- <html xmlns:th="http://www.thymeleaf.org"> -->

<head>
    <title>Getting Started: Handling Form Submission</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <link rel="stylesheet" type="text/css" href="style1.css" />
</head>

<body>
	<h1>Result</h1>
    <!-- <p th:text="'id: ' + ${greeting.id}" />
    <p th:text="'content: ' + ${greeting.content}" /> -->

    <p> id: ${player.id} </p>
    <p> points: ${player.points} </p>
    <p> coins: ${player.coins} </p>

    <a href="/curve-fever/services/playersForm">Update another player.</a>
</body>
</html>