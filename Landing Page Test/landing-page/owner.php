<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$from = 'From: $email';
	$to = 'owner@domain.com';
	$subject = 'user offer';
	$body = 'From:' .$name. "\r\n email:" .$email."\r\n scheduled to redeem promo code";

	if(isset($_POST['submit'])){
		if(mail($to, $subject, $body, $from)){
			echo 'scheduled for promo code successfully';
		}
		else{
			echo 'oops! error occured';
		}
	}
 ?>