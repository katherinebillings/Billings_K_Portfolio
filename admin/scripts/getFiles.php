<?php
    // Turn on error reporting
	//ini_set('display_errors', 1);
	//error_reporting(E_ALL);

	//Connect to database
	include('connect.php');

	if(isset($_GET['type'])){
		//1. Filters movies by genre
		$type = $_GET['type'];
		$typeQuery = "SELECT p.port_title, p.port_position, p.port_summary, p.port_image, p.port_outside, o.outside_name FROM tbl_portfolio p, tbl_outside o, tbl_port_out po, tbl_type t, tbl_port_type pt WHERE p.port_id = po.port_id AND o.outside_id = po.outside_id AND p.port_id = pt.port_id AND t.type_id = pt.type_id AND t.type_name = {$type}";
		//echo $filterQuery;
		$getFiles = mysqli_query($link, $typeQuery);
	}else if(isset($_GET['stage'])){
		//1. Filters movies by genre
		$stage = $_GET['stage'];
		$stageQuery = "SELECT p.port_title, p.port_position, p.port_summary, p.port_image, p.port_outside, o.outside_name FROM tbl_portfolio p, tbl_outside o, tbl_port_out po, tbl_stages s, tbl_port_stag ps WHERE p.port_id = po.port_id AND o.outside_id = po.outside_id AND p.port_id = ps.port_id AND s.stages_id = ps.stages_id AND s.stages_name = {$stage}";
		//echo $filterQuery;
		$getFiles = mysqli_query($link, $stageQuery);
	}
	else if(isset($_GET['id'])){
		//2. Return a single movie
		$id = $_GET['id'];
		$querySingle = "SELECT p.port_title, p.port_position, p.port_details, p.port_date, p.port_image, p.port_outside, o.outside_name, GROUP_CONCAT(pr.program_name SEPARATOR ', ') AS 'program_name' FROM tbl_portfolio p, tbl_outside o, tbl_port_out po, tbl_programs pr, tbl_port_prog pp WHERE p.port_id = po.port_id AND o.outside_id = po.outside_id AND p.port_id = pp.port_id AND pr.program_id = pp.program_id AND p.port_id = {$id}";
		$getFiles = mysqli_query($link, $querySingle);
	}else{
		//4. Returns all movies
		$fileQuery = "SELECT p.port_title, p.port_position, p.port_summary, p.port_image, p.port_outside, o.outside_name FROM tbl_portfolio p, tbl_outside o, tbl_port_out po WHERE p.port_id = po.port_id AND o.outside_id = po.outside_id GROUP BY p.port_id";

		$getFiles = mysqli_query($link, $fileQuery);
		//echo $getMovies;
	}

	$grpResult = "";

	echo "[";

	while($fileResult = mysqli_fetch_assoc($getFiles)) {
		//echo "Are we there yet?";
		//echo $movResult['movies_id'];
		$jsonResult = json_encode($fileResult);
		$grpResult .= $jsonResult.","; 
	}

	echo substr($grpResult, 0, -1);

	echo "]";
	
	mysqli_close($link);
 ?>