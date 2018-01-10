<?php
	require_once('admin/scripts/config.php');
	if(isset($_POST['name'])){
		//echo "yup";
		$direct = "thankyou.php";
		$name = $_POST['name'];
        $email = $_POST['email'];
        $subject = $_POST['subject'];
		$street = $_POST['street'];
		$message = $_POST['message'];
		//echo $name;
		if($street === ""){
			//echo "send mail";
			$sendMail = submitMessage($direct, $name, $email, $subject, $message);
		}else{
			echo "Go Away";
		}
	}
?>