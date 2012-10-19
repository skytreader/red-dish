<?php

try{
	$host = $_GET["host"];
	$port = $_GET["port"];
	$key = $_GET["key"];
	$value = $_GET["value"];
	$redis = new Redis();
	// FIXME when will this ever close?
	$redis->connect($host, $port);
	$redis->set($key, $value);
	
	echo "Value set successful!";
} catch(Exception $e){
	echo "Error setting value.";
}

?>
