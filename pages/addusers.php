 
<?php
include('conn.php');

$sql2="INSERT INTO users(name,age,msisdn,county)
VALUES
('$_POST[user_name]','$_POST[user_age]','$_POST[user_msisdn]','$_POST[county]')";

mysqli_query($con,$sql2)or die(mysqli_error($con)); 

header("location:success.php");
 

?>