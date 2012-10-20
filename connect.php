<?php

try{
	$host = $_GET["host"];
	$port = $_GET["port"];
	$redis = new Redis();
	// FIXME when will this ever close?
	$redis->connect($host, $port);
	
	echo "Redis server at $host:$port is alive.";
} catch(Exception $e){
	echo "Couldn't connect to Redis server at $host:$port";
}

?>
