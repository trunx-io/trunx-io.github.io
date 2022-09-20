<?php

    require("class.phpmailer.php");
    $from = $_POST["email"];
    $fullname = $_POST["full_name"];
    $mobile=$_POST["mobile"];
    $designation=$_POST["designation"];
    $company=$_POST["company"];
    $industry=$_POST["industry"];
    $PHPMailer = new PHPMailer();
    $emailcontent = "Name:".$fullname."<br>Mobile:".$mobile."<br>Email:".$from."<br>Designation:".$designation."<br>Company".$company."<br>Industry".$industry;
    $PHPMailer->From = $from;
    $PHPMailer->FromName = $_POST["full_name"];
	//change where to mail sent 
    $PHPMailer->AddAddress('info@pentathemes.com');
    $PHPMailer->Subject = "Saasapp Demo Request";
    $PHPMailer->MsgHTML($emailcontent);
    if ($PHPMailer->Send()) {
        $success=true;
    } else {
        $success=false;
    }
    $json_data = array('success' => $success);
    echo json_encode($json_data);
    exit();

?>