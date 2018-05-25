<?php
    $from = $_POST["email"];
    $title = $_POST["title"];
    $message = $_POST["message"];
    $message = "Wiadomość z mpecak.pl od: ".$from.":\n\n".$message;
    $from  = "From: mpecak@mpecak.pl \r\n";
    $from .= "MIME-Version: 1.0\r\n";
    $from .= "Content-type: text/html; charset=utf-8\r\n";
    $receiver = "office@itpulse.pl";

    if (mail($receiver, $title, $message, $from)) {
        $data = "OK";
    } else {
        $data = "ERROR";
    };

    header('Content-type: application/json');
    echo json_encode($data);
?>