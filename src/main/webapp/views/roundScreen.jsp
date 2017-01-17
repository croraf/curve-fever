<!DOCTYPE HTML>

<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<html>
<head>
        <base href="${pageContext.request.contextPath}/" />

	    <title>Battlefield</title>
	    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />


	    <!--Import Google Icon Font-->
	    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	    <!--Import materialize.css-->
	    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/css/materialize.min.css">


	    <!--Let browser know website is optimized for mobile-->
	    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

	    <link rel="stylesheet" type="text/css" href="static/style1.css" />
	    <link rel="stylesheet" type="text/css" href="static/containerWithList.css" />
        <link rel="stylesheet" type="text/css" href="static/roundScreen/roundScreen.css" />
</head>

<body tabindex="1" id="body">

		<div id = "container">

			<div id = "playersListCollumn">
				
				<h5 class="center-align">In game</h5>

				<div id = "playersList" class="glowingShaddow center-align collection scrollbar-style-2">
				</div>

			    <a href="services/round/exit/${player.name}">Leave</a>
			</div>

			<div id = "boardCollumn">
				<canvas id="board" width="600" height="520" class="glowingShaddow"></canvas>

		        <div id = "startStop">
		            START
		        </div>

				<div id = "mute">
					<i class="material-icons">volume_off</i>
				</div>

				<div id = "currentPlayer">${player.name}</div>

				<%-- <div id = "positionDataBox"></div> --%>
			</div>

		</div>




		<audio id= "backgroundAudio" loop>
	        <source src="static/battleScreen/Virgo_Rosa.ogg" type="audio/ogg">
	        Your browser does not support the audio element.
	    </audio>

		 <%-- <audio id= "boardAudio">
	        <source src="static/roundScreen/soundOnBoardClick.ogg" type="audio/ogg">
	        Your browser does not support the audio element.
	    </audio> --%>

	    <!--Import jQuery before materialize.js-->
	    <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
	    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/js/materialize.min.js"></script>


        <!--Initialize webSocket first-->
	    <script type="text/javascript" src="static/roundScreen/webSocket.js"></script>

	    <script type="text/javascript" src="static/roundScreen/roundScreen.js"></script>
	    <script type="text/javascript" src="static/roundScreen/roundScreenBoard.js"></script>
	    <script type="text/javascript" src="static/roundScreen/startButton.js"></script>
	    <script type="text/javascript" src="static/roundScreen/playerList.js"></script>

</body>
</html>