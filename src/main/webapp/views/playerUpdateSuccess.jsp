<!DOCTYPE HTML>

<!-- <html xmlns:th="http://www.thymeleaf.org"> -->

<head>
    <title>Getting Started: Handling Form Submission</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

</head>

<body>
	<h1>Player was successfully updated</h1>

    <p> id: ${player.id} </p>
    <p> points: ${player.points} </p>
    <p> coins: ${player.coins} </p>

    <a href="/services/playersForm">Update another player.</a>
</body>
</html>