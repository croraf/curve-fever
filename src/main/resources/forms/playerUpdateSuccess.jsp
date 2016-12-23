<!DOCTYPE HTML>

<!-- <html xmlns:th="http://www.thymeleaf.org"> -->

<head>
    <title>Getting Started: Handling Form Submission</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
</head>

<body>
	<h1>Result</h1>
    <!-- <p th:text="'id: ' + ${greeting.id}" />
    <p th:text="'content: ' + ${greeting.content}" /> -->

    <p> id: ${player.id} </p>
    <p> points: ${player.points} </p>
    <p> coins: ${player.coins} </p>

    <a href="/curve-fever/services/players/update/playerUpdateForm">Update another player.</a>
</body>
</html>