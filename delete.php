
<?php
include('loader.php');
$delTask=$_POST['del'];

    $delete = "DELETE FROM list WHERE list='$delTask'";
    mysql_query( $delete);

?>