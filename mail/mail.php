<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $inputJSON = file_get_contents('php://input');
    $input = json_decode($inputJSON, true);

   
    $name = $input['fullName'];
    $phone = $input['phone'];
    $email = $input['email'];
    $msg = $input['comment'];

    if (
        $name != "" &&
        $phone != "" &&
        $email != "" &&
        $msg != ""
    ) {
        $subject = "Сообщение от $name";

        $message = "";
        $message .= "Имя: $name\n";
        $message .= "Телефон: $phone\n";
        $message .= "Email: $email\n";
        $message .= "Сообщение: $msg";

        $to = "musakubanov@gamil.com";
        $headers = "From: $email";

        if (mail($to, $subject, $message, $headers)) {
            echo json_encode(["success" => true]);
        } else {
            echo json_encode(["success" => false, "message" => "При отправке сообщения произошла ошибка."]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "Пожалуйста, заполните все поля."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Неправильный метод запроса."]);
}
?>
