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

        <script>
                var playerName = "${player.name}";
        </script>
</head>

<body tabindex="1" id="body">

		<div class = "myContainer">

			<div id = "playersListCollumn">
				
				<h5 class="center-align">In game</h5>

				<div id = "playersList" class="glowingShadow center-align collection scrollbar-style-2"></div>

				<div id = "chat" class="glowingShadow collection scrollbar-style-2"> </div>

				<div id = "chatInputBox" class="glowingShadow collection scrollbar-style-2">

				    <form id = "chatForm">
				        <input type="text" name="text" autocomplete="off" autocorrect="off" autocapitalize="off"
                                                       spellcheck="false"/>
				    </form>
				</div>

			    <a href="services/round/exit">Log out</a>
			</div>

			<div id = "boardCollumn">

				<canvas id="board" width="600" height="520" class="glowingShadow"></canvas>
				<canvas id="glass" width="600" height="520"></canvas>

                <div id = "controlRow">

                    <c:if test="${player.name==\"rafa\"}">
                        <div id = "restart" class="controlRowElement">
                            RESTART
                        </div>
                    </c:if>

                    <div id = "currentPlayer"  class="controlRowElement">${player.name}</div>

                    <div id = "mute" class="controlRowElement">
                        <i class="material-icons">volume_up</i>
                    </div>



                    <%-- <div id = "positionDataBox"></div> --%>

                </div>

			</div>

		</div>



		<audio id= "backgroundAudio">
		    <!-- List of songs set in audio.js -->
	        <!-- <source src="static/roundScreen/songs/Virgo_Rosa.ogg" type="audio/ogg"> -->
	        <!-- <source src="static/roundScreen/songs/TheCurseOfMonkeyIsland.mp3" type="audio/ogg"> -->
	        <!-- <source src="static/roundScreen/songs/05 - Following The Shop Keeper.mp3" type="audio/ogg"> -->
	        Your browser does not support the audio element.
	    </audio>


	    <!--Import jQuery before materialize.js-->
	    <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
	    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/js/materialize.min.js"></script>


        <!--Initialize playerList then webSocket first-->
        <script type="text/javascript" src="static/roundScreen/webSocket.js"></script>
        <script type="text/javascript" src="static/roundScreen/chat.js"></script>
        <script type="text/javascript" src="static/roundScreen/drawPlayer.js"></script>

	    <script type="text/javascript" src="static/roundScreen/backgroundAudio.js"></script>
	    <script type="text/javascript" src="static/roundScreen/directionListener.js"></script>
	    <script type="text/javascript" src="static/roundScreen/restartButton.js"></script>

	    <!--Testing-->
        <script type="text/javascript" src="static/roundScreen/drawOnGlass.js"></script>

</body>
</html>