<?php

error_reporting(E_ALL ^ E_WARNING);

try{
	$host = $_GET["host"];
	$port = $_GET["port"];
	$key = $_GET["key"];
	$value = $_GET["value"];
	$redis = new Redis();
	$redis->connect($host, $port);
	$redis->set($key, $value);
	
	echo "Mapped '$key' to '$value'!";
} catch(Exception $e){
	echo "Error mapping '$key' to '$value'. Please check that you are connected.";
}

?>
