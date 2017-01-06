<!DOCTYPE HTML>

<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<head>
    <title>Battlefield</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/css/materialize.min.css">


    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    <link rel="stylesheet" type="text/css" href="/static/style1.css" />
    <link rel="stylesheet" type="text/css" href="/static/battleScreen.css" />
    
    <script type="text/javascript">
    	
    	window.onload = function() {
		    
		    var backgroundAudio=document.getElementById("backgroundAudio");
		    backgroundAudio.volume=0.1;
		    //backgroundAudio.play();

		    var mute=document.getElementById("mute");
		
			mute.onclick = function(event) {
				
				backgroundAudio=document.getElementById("backgroundAudio");

				if (backgroundAudio.paused) {
					backgroundAudio.play();
				} else {
					backgroundAudio.pause();
				}
			};
		};

		

    </script>
</head>
<body>

	<div id = "board">
		<img src="/static/tableTop.jpg" height="520" width="600" title="battleField">
	</div>

	<div id = "mute">
		MUTE
	</div>

	<div id = "playersList">
		
		<h5>All players</h5>

		<div id = "playersListContent">
			<c:forEach items = "${players}" var = "player">
			    <p>Id: ${player.id},  Name: ${player.name},  Points: ${player.points},  Coins: ${player.coins} </p>
			</c:forEach>
		</div>

	    <p><a href="/services/playersForm">Pick another player</a></p>
	</div>

	<audio id= "backgroundAudio" loop>
        <source src="/static/Virgo_Rosa.ogg" type="audio/ogg">
        Your browser does not support the audio element.
    </audio>

    <body>
          <!--Import jQuery before materialize.js-->
          <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/js/materialize.min.js"></script>
     </body>
	
</body>
</html>