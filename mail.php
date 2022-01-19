<?php




    $fromEmail = $_GET["email"];
    $toEmail = "welcome@therelevancehouse.com";
    $name = $_GET["name"];
    $message_ = $_GET["message"];
    
    $subject = "Enquiry from website: Email by ".$name;
      $message = "
      <html>
      <head>
      <title>Plus + Email!</title>
      </head>
      <body>
      
      <p> 
      Name: ".$name."<br>
      <br>
      Message: ".$message_." <br>
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