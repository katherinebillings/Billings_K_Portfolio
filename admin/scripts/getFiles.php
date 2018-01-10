<?php
    // Turn on error reporting
	//ini_set('display_errors', 1);
	//error_reporting(E_ALL);

	//Connect to database
	include('connect.php');

	if(isset($_GET['filter'])){
		//1. Filters movies by genre
		$filter = $_GET['filter'];
		$filterQuery = "SELECT p.port_title, p.port_position, p.port_summary, p.port_image, p.port_outside, o.outside_name FROM tbl_portfolio p, tbl_outside o, tbl_port_out po, tbl_type t, tbl_port_type pt WHERE p.port_id = po.port_id AND o.outside_id = po.outside_id AND p.port_id = pt.port_id AND t.type_id = pt.type_id AND t.type_name = {$filter}";
		//echo $filterQuery;
		$getFiles = mysqli_query($link, $filterQuery);
	}else if(isset($_GET['id'])){
		//2. Return a single movie
		$id = $_GET['id'];
		$querySingle = "SELECT p.port_title, p.port_position, p.port_details, p.port_date, p.port_image, p.port_outside, o.outside_name, GROUP_CONCAT(pr.program_name) AS 'program_name' FROM tbl_portfolio p, tbl_outside o, tbl_port_out po, tbl_programs pr, tbl_port_prog pp WHERE p.port_id = po.port_id AND o.outside_id = po.outside_id AND p.port_id = pp.port_id AND pr.program_id = pp.program_id AND p.port_id = {$id)";
		$getMovies = mysqli_query($link, $querySingle);
	}else{
		//4. Returns all movies
		$movieQuery = "SELECT p.port_title, p.port_position, p.port_summary, p.port_image, p.port_outside, o.outside_name FROM tbl_portfolio p, tbl_outside o, tbl_port_out po WHERE p.port_id = po.port_id AND o.outside_id = po.outside_id";

		$getMovies = mysqli_query($link, $movieQuery);
		//echo $getMovies;
	}

	$grpResult = "";

	echo "[";

	while($movResult = mysqli_fetch_assoc($getMovies)) {
		//echo "Are we there yet?";
		//echo $movResult['movies_id'];
		$jsonResult = json_encode($movResult);
		$grpResult .= $jsonResult.","; 
	}

	echo substr($grpResult, 0, -1);

	echo "]";
	
	mysqli_close($link);
 ?>