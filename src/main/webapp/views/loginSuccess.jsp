
<link rel="stylesheet" type="text/css" href="static/loginSuccess/loginSuccess.css" />
<script>
        var playerName = "${player.name}";
</script>

<div id = "playersListCollumn">

        <h5 class="center-align">All players</h5>

        <div id = "playersList" class="glowingShadow center-align collection scrollbar-style-2">
        </div>

</div>

<div id = "pickedPlayerCollumn">

    <h4 class="center-align">Login success!</h4>

    <p> Id: ${player.id} </p>
    <p> Name: ${player.name} </p>
    <p> Points: ${player.points} </p>
    <p> Coins: ${player.coins} </p>

    <p id = "startRoundRow">
        <button type="button" id="startRound" class="waves-effect waves-light btn">
            Start round
        </button>

        <select name="colorpicker-picker-delay">
              <option value="#FFFFFF">White</option>
              <option value="#7bd148">Lime</option>
              <option value="#5484ed">Blue</option>
              <%--<option value="#a4bdfc">Blue</option>--%>
              <option value="#46d6db">Cyan</option>
              <%--<option value="#7ae7bf">Lime</option>--%>
              <option value="#51b749">Green</option>
              <option value="#fbd75b">Yellow</option>
              <option value="#ffb878">Orange</option>
              <%--<option value="#ff887c">Red</option>--%>
              <option value="#dc2127">Red</option>
              <option value="#dbadff">Purple</option>
              <option value="#e1e1e1">Gray</option>
        </select>

        <script src="static/plugins/jquery.simplecolorpicker.js"></script>
        <link rel="stylesheet" href="static/plugins/jquery.simplecolorpicker.css">

        <script>
                 $('select[name="colorpicker-picker-delay"]').simplecolorpicker({picker: true, theme: 'glyphicons', pickerDelay: 1000});
                 //$('select[name="colorpicker-longlist"]').simplecolorpicker('destroy');
        </script>

    </p>

    <p>
        <button type="button" id="logOut" class="waves-effect waves-light btn">
            Log out
        </button>
    </p>

</div>

