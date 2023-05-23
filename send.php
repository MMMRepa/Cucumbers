<?php

$to = 'poligraf.kr@gmail.com';

$name = htmlspecialchars($_POST["name"]);
$phone = htmlspecialchars($_POST["phone"]);

$token = "770393250:AAELopGkdwjMzqiZmJUBHSZ9JO_YTPmqmh4";
$chat_id = "-1001340953541";

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

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

header("Location: thankyou.html");
