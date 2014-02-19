<?php
                $name = $_POST["func"];
                $pla = $_POST["palce"];
                function getDirfile($dir){  
                    $filelist;  
                    if (is_dir($dir)) {  
                        if ($dh = opendir($dir)) {  
                            $i = 0;  
                            while (($file = readdir($dh)) != false) {  
                                if($file != "." && $file != ".."){  
                                    //print "filename: $file : filetype: " . filetype($dir . $file) . "/n";  
                                    $filelist[$i] = $file;  
                                    $i++;  
                                }  
                            }  
                            closedir($dh);  
                        }  
                        return $filelist;  
                    }  
                } 
                $meun = $pla;
                $mm = getDirfile($meun);
                for($i=0;$i<count($mm);$i++){
                    if (($mm[$i] == $name)&&$mm[$i]!=null)
                        echo $meun.$mm[$i];
                }
?>