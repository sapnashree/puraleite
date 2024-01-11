<?php
//get data from form  

$name = $_POST['name'];

$email= $_POST['email'];
$subjectt = $_POST['subject'];
$message= $_POST['message'];
$to = "sachin@puraleite.com";
$subject = "You have recevied new enquiry";
$txt =" Puraleite Training Solution : New Enquiry   \r 
Customer Name : ". $name . "\r  Email : " . $email . "\r  Subject : " . $subjectt . "\r  Message : " . $message;
$headers = "From: $email" . "\r\n" .
"CC: $email";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:Thank.html");
?>