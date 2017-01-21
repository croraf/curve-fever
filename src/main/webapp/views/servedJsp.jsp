    <link rel="stylesheet" type="text/css" href="static/loginSuccess/loginSuccess.css" />
    <script>
            var playerName = "${player.name}";
    </script>

    <div class="myContainer">



        <div id = "playersListCollumn">

                <h5 class="center-align">All players</h5>

                <div id = "playersList" class="glowingShaddow center-align collection scrollbar-style-2">
                </div>

        </div>

        <div id = "pickedPlayerCollumn">

            <h4 class="center-align">Login success!</h4>

            <p> Id: ${player.id} </p>



            <p>
                Name: ${player.name}

            </p>
            <p> Points: ${player.points} </p>
            <p> Coins: ${player.coins} </p>

            <p>
                <button type="button" id="startRound" class="waves-effect waves-light btn">
                    Start round
                </button>

                <!-- Dropdown Trigger -->
                <span id="colorPicker" class='dropdown-button btn' data-activates='dropdown1'></span>

                <!-- Dropdown Structure -->
                <ul id='dropdown1' class='dropdown-content'>
                    <li><span  style="background-color:white"> </span></li>
                    <li class="divider"></li>
                    <li><span  style="background-color:red"> </span></li>
                    <li class="divider"></li>
                    <li><span  style="background-color:yellow"> </span></li>
                    <li class="divider"></li>
                    <li><span  style="background-color:blue"> </span></li>
                </ul>
            </p>

            <p>
                <button type="button" id="logOut" class="waves-effect waves-light btn">
                    Log out
                </button>
            </p>

        </div>
    </div>

    <!--Import jQuery before materialize.js-->
	<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/js/materialize.min.js"></script>
    <script type="text/javascript" src="static/loginSuccess/loginSuccess.js"></script>