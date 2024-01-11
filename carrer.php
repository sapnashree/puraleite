<?php

if(isset ($_POST['submit'])){ 
//var_dump($_POST); 
//die; $
$fname = $_POST['fname']; 
$lname = $_POST['lname']; 
$phone = $_POST['phone']; 
$email = $_POST['email']; 
$education = $_POST['education']; 
$experience = $_POST['experience']; 
$dept = $_POST['dept'];
$message = '
<table width="70%" border="1" cellpadding="5" cellspacing="0" style="height: 129px;">
  <tbody>
    <tr style="height: 21px;">
      <td colspan="2" bgcolor="#6b9e19" align="center" style="font-family: Verdana, Geneva, sans-serif; font-size: 14px; color: #ffffff; height: 21px;"><b>Resume From Website.</b></td>
    </tr>
    <tr style="height: 18px;">
      <td width="30%" style="font-family: Verdana, Geneva, sans-serif; font-size: 12px; text-align: left; color: #7a7a7a; height: 18px;"><b>First Name</b></td>
      <td width="70%" style="font-family: Verdana, Geneva, sans-serif; font-size: 12px; text-align: left; color: #404040; height: 18px;"><b>' . $fname . '</b></td>
    </tr>
    <tr style="height: 18px;">
      <td width="30%" style="font-family: Verdana, Geneva, sans-serif; font-size: 12px; text-align: left; color: #7a7a7a; height: 18px;"><b>Last Name</b></td>
      <td width="70%" style="font-family: Verdana, Geneva, sans-serif; font-size: 12px; text-align: left; color: #404040; height: 18px;"><b>' . $lname . '</b></td>
    </tr>
    <tr style="height: 18px;">
      <td width="30%" style="font-family: Verdana, Geneva, sans-serif; font-size: 12px; text-align: left; color: #7a7a7a; height: 18px;"><b>Mobile </b></td>
      <td width="70%" style="font-family: Verdana, Geneva, sans-serif; font-size: 12px; text-align: left; color: #404040; height: 18px;"><b>' . $phone . '</b></td>
    </tr>
    <tr style="height: 18px;">
      <td width="30%" style="font-family: Verdana, Geneva, sans-serif; font-size: 12px; text-align: left; color: #7a7a7a; height: 18px;"><b>Email</b></td>
      <td width="70%" style="font-family: Verdana, Geneva, sans-serif; font-size: 12px; text-align: left; color: #404040; height: 18px;"><b>' . $email . '</b></td>
    </tr>
    <tr style="height: 18px;">
      <td width="30%" style="font-family: Verdana, Geneva, sans-serif; font-size: 12px; text-align: left; color: #7a7a7a; height: 18px;"><b>Education</b></td>
      <td width="70%" style="font-family: Verdana, Geneva, sans-serif; font-size: 12px; text-align: left; color: #404040; height: 18px;"><b>' . $education . '</b></td>
    </tr>
    <tr style="height: 18px;">
      <td width="30%" style="font-family: Verdana, Geneva, sans-serif; font-size: 12px; text-align: left; color: #7a7a7a; height: 18px;"><b>Work Experience </b></td>
      <td width="70%" style="font-family: Verdana, Geneva, sans-serif; font-size: 12px; text-align: left; color: #404040; height: 18px;"><b>' . $experience . '</b></td>
    </tr>
  
  </tbody>
</table>'; 
$from_email         = $_POST["email"]; //from mail, it is mandatory with some hosts
    $recipient_email    = 'md@puraleite.com'; //recipient email (most cases it is your personal email)
    
    //Capture POST data from HTML form and Sanitize them,
    $sender_name    = filter_var($_POST["fname"], FILTER_SANITIZE_STRING); //sender name
    $reply_to_email = filter_var($_POST["email"], FILTER_SANITIZE_STRING); //sender email used in "reply-to" header
    //$subject        = filter_var($_POST["subject"], FILTER_SANITIZE_STRING); //get subject from HTML form
    $subject        = "Resume From Website";
    
    //Get uploaded file data
    $file_tmp_name    = $_FILES['my_file']['tmp_name'];
    
    $file_name        = $_FILES['my_file']['name'];
    $file_size        = $_FILES['my_file']['size'];
    $file_type        = $_FILES['my_file']['type'];
    $file_error       = $_FILES['my_file']['error'];

    if($file_error > 0)
    {
        die('Upload error or No files uploaded');
    }
    //read from the uploaded file & base64_encode content for the mail
    $handle = fopen($file_tmp_name, "r");
    $content = fread($handle, $file_size);
    fclose($handle);
    $encoded_content = chunk_split(base64_encode($content));

        $boundary = md5("sanwebe");
    //header
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "From:".$from_email."\r\n";
        $headers .= "Reply-To: ".$reply_to_email."" . "\r\n";
        $headers .= "Content-Type: multipart/mixed; boundary = $boundary\r\n\r\n";
       
        //plain text
        $body = "--$boundary\r\n";
        $body .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
        $body .= chunk_split(base64_encode($message));
       
        //attachment
        $body .= "--$boundary\r\n";
        $body .="Content-Type: $file_type; name=".$file_name."\r\n";
        $body .="Content-Disposition: attachment; filename=".$file_name."\r\n";
        $body .="Content-Transfer-Encoding: base64\r\n";
        $body .="X-Attachment-Id: ".rand(1000,99999)."\r\n\r\n";
        $body .= $encoded_content;
   
    $sentMail = mail($recipient_email, $subject, $body, $headers);
    if($sentMail) //output success or failure messages
    {      
        //die('Thank you for your email');
        echo "<script langauge='javascript'> window.location.href='Thank.html';</script>";
    }else{
        die('Could not send mail! Please check your PHP mail configuration.');  
    }
  
}
?>