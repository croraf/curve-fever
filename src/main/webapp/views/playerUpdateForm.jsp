<!DOCTYPE HTML>
<!-- <html xmlns:th="http://www.thymeleaf.org"> -->

<head>
    <title>Getting Started: Handling Form Submission</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
</head>
<body>
	<h1>Form</h1>
    <!-- <form action="#" th:action="@{/greeting}" th:object="${greeting}" method="post">
    	<p>Id: <input type="text" th:field="*{id}" /></p>
        <p>Message: <input type="text" th:field="*{content}" /></p>
        <p><input type="submit" value="Submit" /> <input type="reset" value="Reset" /></p>
    </form> -->

    <form action="/curve-fever/services/playersForm" method="post" accept-charset="utf-8">
    	<p>Id: <input type="text" name="id" /></p>
    	<p>Points: <input type="text" name="points" /></p>
        <p>Coins: <input type="text" name="coins" /></p>

        <p><input type="submit" value="Submit" /> <input type="reset" value="Reset" /></p>
    </form>
</body>
</html>