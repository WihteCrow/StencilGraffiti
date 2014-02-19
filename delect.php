<?php
	/**
	 *	在页面刷新是删除111.jpg
	 */
	$file = "images/111.jpg";
	$photo = "images/upload.jpg";
	function delete($filename){
			if (file_exists($filename)) { 
			unlink($filename); 
			}
	}
	delete($file);
	delete($photo);
?>