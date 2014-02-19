<?php
			//读取数据目录所有的文件  
	$name = $_GET["url"];
	$namelist = array();
	foreach ($name as $i) {
		array_push($namelist, $i);
	}
	// ["add/eye/", "add/glass/", "add/nose/", "add/mouth/", "add/hand/", "add/mustache/", "add/cloth/man/", "add/cloth/woman/", "add/others/"]
//	$namelist = array("add/eye/","add/glass/");
	$arr = array(); 
	function getDirfile($dir){ 
			        $filelist = null;  
			        if (is_dir($dir)) {  
			            if ($dh = opendir($dir)) {  
			                $i = 0;  
			                while (($file = readdir($dh)) != false) {  
			                    if($file != "." && $file != ".."){  
			                        //print "filename: $file : filetype: " . filetype($dir . $file) . "/n";  
			                        $filelist[$i] = $dir.$file;  
			                        $i++;  
			                    }  
			                }  
			                closedir($dh);  
			            }  
			            return $filelist;
			        }  
	} 
	foreach ($namelist as $list) {
		$filelist = getDirfile($list);
		array_push($arr, $filelist);
	}
	echo json_encode($arr);

?>