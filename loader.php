<?php

$db_host = 'localhost';
$db_user = 'root';
$db_pass = 'password';
$db_database = 'todo';


$dblinkPub = mysql_connect($db_host, $db_user, $db_pass );
mysql_select_db($db_database) or die("Unable .. to select database - $db_database");

?>