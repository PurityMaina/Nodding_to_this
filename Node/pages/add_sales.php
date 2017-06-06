 
<?php
include('conn.php');

$sql="INSERT INTO sales (date_leo,quantity,description,shillings,cents)
VALUES
('$_POST[user_date]','$_POST[user_quantity]','$_POST[user_description]',
	'$_POST[user_shillings]','$_POST[user_cents]')";

mysqli_query($con,$sql)or die(mysqli_error($con)); 

//header("location:success.php");
 

?>