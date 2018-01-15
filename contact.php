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

<!doctype html>
<html class="no-js" lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Katherine Billings - Contact</title>
    <link rel="stylesheet" href="css/foundation.css">
    <link rel="stylesheet" href="css/app.css">
  </head>
  <body>
   	<h1 class="hide">Katherine Billings - Contact</h1>
        <header>
            <div class="grid-container">
                <div class="grid-x grid-padding-x">
                    <div class="small-6 small-offset-3 medium-offset-0 medium-3 large-2 cell" id="logo"></div>
                    <div id="hamMenu" class="small-3 cell" data-responsive-toggle="mainNav" data-hide-for="medium">
                        <button class="menu-icon float-right" type="button" data-toggle="mainNav">
                        </button>
                    </div>
                    <nav id="mainNav" class="small-6 small-offset-3 medium-offset-2 medium-7 large-offset-3 cell">
                        <h2 class="hide">Main Navigation</h2>
                        <ul class="vertical medium-horizontal menu">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="gallery.html">Gallery</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        <div class="grid-container" id="content">
            <div class="grid-x grid-padding-x" id="topTitles">
                <h2 class="small-8 small-offset-2 medium-4 medium-offset-4 large-8 large-offset-2 cell">Contact</h2>
                <h3 class="small-8 small-offset-2 medium-4 medium-offset-4 large-4 large-offset-4 cell">Let's chat</h3>
            </div>
            <div class="grid-x grid-padding-x">
                <form action="contact.php" method="post" id="registerForm" class="small-12 medium-10 medium-offset-1 large-8 large-offset-2">
                    <input type="text" required placeholder="Name" name="name">
                    <input type="email" required placeholder="Email" name="email">
                    <input type="text" placeholder="Subject" name="subject">
                    <input type="text" placeholder="Street" name="street" class="hide">
                    <textarea required placeholder="Message..." name="message" rows="6"></textarea>
                    <input id="send" required type="submit" value="Send" class="bPattern">
                </form>
            </div>
        </div>
            
        <footer>
            <div class="grid-container">
                <h2 class="hide">Footer</h2>
                <div class="grid-x grid-padding-x">
                    <div id="mediaIcons" class="small-12 medium-4 cell">
                        <a href="https://twitter.com/supersonicslash" id="twitter" class="icons whiteGlow"><img src="images/icons/twitter-white.svg" alt="twitter"></a>
                        <a href="https://www.youtube.com/user/vigeasmos" id="youtube" class="icons whiteGlow"><img src="images/icons/youtube-white.svg" alt="youtube"></a>
                        <a href="https://supersonicslash.deviantart.com/" id="deviantart" class="icons whiteGlow"><img src="images/icons/deviantart-white.svg" alt="deviantart"></a>
                        <a href="https://github.com/katherinebillings" id="github" class="icons whiteGlow"><img src="images/icons/github-white.svg" alt="github"></a>
                    </div>
                    <p id="copyright" class="small-12 medium-4 medium-offset-4 cell">&#169; 2018 Katherine Billings</p>
                </div>
            </div>
        </footer>
    <script src="js/vendor/jquery.js"></script>
    <script src="js/vendor/what-input.js"></script>
    <script src="js/vendor/foundation.js"></script>
    <script src="js/app.js"></script>
  </body>
</html>