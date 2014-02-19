<?php
header("Content-Type: text/html;charset=utf-8");
if ((($_FILES["file"]["type"] == "image/gif") || ($_FILES["file"]["type"] == "image/jpeg") || ($_FILES["file"]["type"] == "image/pjpeg") || ($_FILES["file"]["type"] == "image/png") || ($_FILES["file"]["type"] == "image/jpg"))
&& ($_FILES["file"]["size"] < 500000))
  {
  if ($_FILES["file"]["error"] > 0)
    {
    echo "Return Code: " . $_FILES["file"]["error"] . "<br />";
    }
  else
    {
    echo "<h1 style='text-align:center;margin-top:50%;background:rgba(225,225,225,0.5);'>状态:上传成功</h1>";

    if (file_exists("take_photo/" . $_FILES["file"]["name"]))
      {
      echo " 文件库中已经有该文件 ";
      }
    else
      {
      move_uploaded_file($_FILES["file"]["tmp_name"],
      "take_photo/" . $_FILES["file"]["name"]);
      }
    }
  }
else
  {
  echo "Invalid file";
  }
?>