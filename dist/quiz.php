<?php
// function ajax_form(){

// if (!$_POST) exit('No direct script access allowed');
// if (empty($_POST['name']) && empty($_POST['phone'])){
// 	exit('пусто');
// }
// if (empty($_POST['name'])) {
// 	exit('Введите имя');
// }
// if (empty($_POST['phone'])){
// 	exit('Введите номер телефона');
// }

// if (!empty($_POST['phone']) && !empty($_POST['name']) ){
  // $razmer = trim(strip_tags($_POST['razmer']));
  // $place = trim(strip_tags($_POST['place']));
	// $phone = trim(strip_tags($_POST['phone']));
	// $name = trim(strip_tags($_POST['name']));
	$razmer = $_POST['razmer'];

  // echo $razmer;
  echo 'успех';

	// $response = '';
	// $thm  = 'Заказ мастера';
	// $msg = "Имя: ".$name.  PHP_EOL; 
	// $msg .= "Телефон: ".$phone. PHP_EOL; 
	// $msg .= "Выбранная схема: ".$elem_choise. PHP_EOL; 
	// $msg .= "Метраж плитки: ".$s1. PHP_EOL; 
	// $msg .= "Демонтаж: ".$s2. PHP_EOL; 
	// $msg .= "Бордюры: ".$s3. PHP_EOL; 
	// $msg .= "Водостоки: ".$s4. PHP_EOL; 
	// $msg .= "Итоговая стоимость: ".$s. PHP_EOL; 
	// $msg .= "Ваши пожелания: ".$textarea. PHP_EOL;	
		     
	// $mail_to = 'filonenko-1996@mail.ru';
	// $headers = 'From: Rimake <ukladka@rimake.by>' . "\r\n";
 	// if(wp_mail($mail_to, $thm, $msg, $headers)){
	// 		$response = 'Ваша заявка принята! Спасибо.';
	// }else
	// 		$response = 'Ошибка при отправке';
	// exit('успех');
// } 	 
// } 


