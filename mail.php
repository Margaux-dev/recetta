<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$subject = $_POST['subject'];
header('Content-Type: application/json');
if ($name === ''){
print json_encode(array('message' => 'Quel est votre nom ?', 'code' => 0));
exit();
}
if ($email === ''){
print json_encode(array('message' => 'Quel est votre email ?', 'code' => 0));
exit();
} else {
if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
print json_encode(array('message' => 'Cet email est incorrect.', 'code' => 0));
exit();
}
}
if ($subject === ''){
print json_encode(array('message' => 'À quel sujet me contactez-vous ?', 'code' => 0));
exit();
}
if ($message === ''){
print json_encode(array('message' => 'Que voulez-vous me dire ?', 'code' => 0));
exit();
}
$content="From: $name \nEmail: $email \nMessage: $message";
$recipient = "contact@margauxdev.com";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $content, $mailheader) or die("Erreur !");
print json_encode(array('message' => 'Message bien envoyé !', 'code' => 1));
exit();
?>