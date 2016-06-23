<?php
error_reporting(0);
include('loader.php');
$newTask=$_POST['list'];
//echo ($newTask);
$insertion = "INSERT INTO list VALUES('$newTask');";
//echo ($insertion);
$thequery = mysql_query($insertion);
//echo ($thequery)
?>