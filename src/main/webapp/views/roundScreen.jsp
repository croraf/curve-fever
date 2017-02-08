<!DOCTYPE HTML>

<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<html>
<head>
        <base href="${pageContext.request.contextPath}/" />

	    <title>CurveFever</title>
	    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	    <!--Let browser know website is optimized for mobile-->
	    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>


	    <!--Import Google Icon Font-->
	    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	    <!--Import materialize.css-->
	    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/css/materialize.min.css">


        <script>
                var maxLengthVariable = "${chatMessageMaxLength}";
                var playerName = "${player.name}";
                var playerColor = "${player.color}"
        </script>
</head>

<body tabindex="1" id="body">

        <div id = "root">
        </div>


        <audio id= "backgroundAudio">
             {/*Playing of songs done with js*/}
             Your browser does not support the audio element.
         </audio>

	    <!--Import jQuery before materialize.js-->
	    <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
	    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/js/materialize.min.js"></script>

        <!--Webpack bundled js-->
        <script type="text/javascript" src="dist/bundle.js"></script>

</body>
</html>