<?php

$to = '';

$name = htmlspecialchars($_POST["name"]);
$phone = htmlspecialchars($_POST["phone"]);

$token = "";
$chat_id = "";

$subject = "Замовлення огірків";
$message = '<h4>Замовлення огірків(' . date("d.m.y H:i") . ')</h4><b>Имя:</b> ' . $name . '<br><b>Телефон:</b> ' . $phone . '<br>';
$headers = "Content-type: text/html; charset=utf-8 \r\n";

mail($to, $subject, $message, $headers);

$arr = array(
   'Замовлення огірків',
   'Ім`я: ' => $name,
   'Телефон: ' => $phone
);

$txt;

foreach ($arr as $key => $value) {
   $txt .= "<b>" . $key . "</b>" . $value . "%0A";
};
if ($token && $chat_id) {
   $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");
}


header("Location: thankyou.html");
