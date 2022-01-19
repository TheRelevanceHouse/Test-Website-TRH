<?php




    $fromEmail = $_GET["email"];
    $toEmail = "events@therelevancehouse.com";
    $name = $_GET["name"];
    $message_ = $_GET["message"];
    $job = $_GET["job"];
    $message1_ = $_GET["subject"];
    
    
    $subject = "Events registration by ".$name;
      $message = "
      <html>
      <head>
      <title>Plus + Email!</title>
      </head>
      <body>
      
      <p> 
      Name: ".$name."<br>
      <br>
      Subject: I want to ".$_GET['subject']." <br>
      <br>
      Job title: ".$job."
      </p>
      </body>
      </html>
      ";
      // Always set content-type when sending HTML email
      $headers = "MIME-Version: 1.0" . "\r\n";
      $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

      // More headers
      $headers .= 'From: <'.$fromEmail.'>' . "\r\n";
      
      if(mail($toEmail,$subject,$message,$headers)){
          echo "success";
      }else{
          echo "failed";
      }

?>