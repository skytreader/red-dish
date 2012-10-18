<?php

try{
	$host = $_GET["host"];
	$port = $_GET["port"];
	$redis = new Redis();
	$redis->connect($host);
	
	echo "Successfully connected to Redis";
} catch(Exception $e){
	echo "Couldn't connect to Redis.";
	echo $e->getMessage();
}

?>
