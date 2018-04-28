<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    $from = $_POST["email"];
    $title = $_POST["title"];
    $message = $_POST["message"];
    $message = "Wiadomość z mpecak.pl:\n\n".$message;
    $from  = "From: ".$from." \r\n";
    $from .= "MIME-Version: 1.0\r\n";
    $from .= "Content-type: text/html; charset=utf-8\r\n";
    $receiver = "mikolajpecak@gmail.com";

    if (mail($receiver, $title, $message, $from)) {
        $data = "OK";
    } else {
        $data = "ERROR";
    };

    header('Content-type: application/json');
    echo json_encode($data);
?>