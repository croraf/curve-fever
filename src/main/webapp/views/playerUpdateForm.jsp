<!DOCTYPE HTML>

<head>
    <base href="/curve-fever/" />

    <title>Log in</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

    <!--Import materialize.css-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/css/materialize.min.css">

    <link rel="stylesheet" type="text/css" href="static/style1.css" />

</head>
<body>

    <div class="container">

        <div class = "row">
            <div class = "col s4 offset-s4 section">
        	    <h4>Pick player</h4>
        	</div>
        </div>    
        
        <div class = "row">
            <div class = "col s4 offset-s4">

                <form action="services/playersForm" method="post" id="pickPlayerForm">
                            <p>
                                Name: <input type="text" name="name" />
                            </p>
                </form>

                <button type="submit" form="pickPlayerForm" class="waves-effect waves-light btn"/>submit</button>

            </div>
        </div>

    </div>

    <!--Import jQuery before materialize.js-->
    <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/js/materialize.min.js"></script>




    <%--
    <form:form action="/services/playersForm" method="post"
               modelAttribute = "player1">
        <p>
            Name: <form:input type="text" path="name" /> <form:errors path="name" cssClass="error"/>
        </p>
        <p>
            Points: <form:input type="text" path="points" /> <form:errors path="points" cssClass="error" />
        </p>
        <p>
            Coins: <form:input type="text" path="coins" /> <form:errors path="coins" cssClass="error" />
        </p>

        <p><input type="submit" value="Submit" /> <input type="reset" value="Reset" /></p>
    </form:form>--%>

</body>
</html>