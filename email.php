<?php
//get data from form  



$email= $_POST['email'];


$to = "sachin@puraleite.com";
$subject = "You have recevied new enquiry";
$txt =" Puraleite Training Solution : New Enquiry   \r 
Email: ". $email;
$headers = "From: $email" . "\r\n" .
"CC: $email";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:Thank.html");
?>