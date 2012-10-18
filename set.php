<?php

try{
	$host = $_GET["host"];
	$port = $_GET["port"];
	$key = $_GET["key"];
	$value = $_GET["value"];
	$redis = new Redis();
	// FIXME when will this ever close?
	$redis->pconnect($host, $port);
	$redis->set($key, $value);
	
	echo "Successfully connected to Redis";
} catch(Exception $e){
	echo "Couldn't connect to Redis.";
	echo $e->getMessage();
}

?>
