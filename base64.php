<?php  

		echo header("Access-Control-Allow-Origin:*");

		//文件名:base64.php

		$data = $_POST["action"]; 
		  
		$name = $_POST["name"];

		$img=base64_decode($data);  
		  
		//echo $img;  


		file_put_contents('images/'.$name.'.jpg', $img);

		$src = $_POST[urls];

		$img_upload=base64_decode($src); 

		$name_upload = $_POST[name_upload];

		if(!empty($src) )
		{
			file_put_contents('take_photo/'.$name_upload.'.png', $img_upload);
		}
		echo json_encode("1");


?>