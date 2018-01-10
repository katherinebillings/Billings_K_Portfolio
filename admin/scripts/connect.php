<?php
	$user = "root";
	$pass = "";
	$url = "localhost";
	$db = "db_portfolio";
	
	$link = mysqli_connect($url, $user, $pass, $db);

	//Check connection
	if(mysqli_connect_errno()) {
		printf("Connection failed: %s\n", mysqli_connect_error());
		exit();
	}
 ?>
