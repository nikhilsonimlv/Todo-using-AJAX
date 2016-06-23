<?php
error_reporting(0);
include('loader.php');

$result = mysql_query("select * from list");

$output = array();


while ($row = mysql_fetch_object($result)) {
    $output[] = $row;
}
mysql_free_result($result);

print(json_encode($output));

?>