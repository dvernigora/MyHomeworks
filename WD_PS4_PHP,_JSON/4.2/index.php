<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
	<title>WD_PS4_PHP_JSON</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
    <h1 class="caption_for_vote">which car do you prefer?</h1>
    <div class="container">
        <form method="post" action="chart.php">
            <label for="bmw"><img class="image_for_form" src="img/bmw.png"/>
                <input
                    id="bmw"
                    type="radio"
                    name="cars"
                    value="BMW"/></label>
            <label for="audi"><img class="image_for_form" src="img/audi.png">
                <input
                    id="audi"
                    type="radio"
                    name="cars"
                    value="AUDI"/></label>
    	    <label for="vw"><img class="image_for_form" src="img/vw.png">
                <input
                    id="vw"    
                    type="radio"
                    name="cars"
                    value="VW"/></label>
            <label for="hummer"><img class="image_for_form" src="img/hummer.png">
                <input
                    id="hummer"
                    type="radio"
                    name="cars"
                    value="HUMMER"/></label>
            <label for="mini"><img class="image_for_form" src="img/mini.png">
                <input
                    id="mini"
                    type="radio"
                    name="cars"
                    value="MINI"/></label>
            <label for="mc"><img class="image_for_form" src="img/mc.png">
                <input
                    id="mc"
                    type="radio"
                    name="cars"
                    value="MC"/></label>
            <input
                type="submit"
                value="vote"
                class="button_for_form">
        </form>
    </div>
</body>
</html>