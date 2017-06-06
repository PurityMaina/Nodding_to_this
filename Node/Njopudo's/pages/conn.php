<?php

$con=mysqli_connect("sql210.epizy.com","epiz_18856946","ep63maina7067","epiz_18856946_busara");

//check connection
if(mysqli_connect_errno())
{
	echo"Failed to connect to MySQL:"
	.mysqli_connect_error();
}

?>