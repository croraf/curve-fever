<!DOCTYPE HTML>

<head>
    <title>Player entered</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <link rel="stylesheet" type="text/css" href="/static/style1.css" />
</head>

<body>
	<h1>Player was successfully picked</h1>

    <p> Id: ${player.id} </p>
    <p> Name: ${player.name} </p>
    <p> Points: ${player.points} </p>
    <p> Coins: ${player.coins} </p>

    <p><a href="/services/playersForm">Pick another player</a></p>
    <p><a href="/services/players">List active players</a></p>
</body>
</html>