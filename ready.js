var isSettingsDisplayed = false;

function toggleSettings(){
	if(!isSettingsDisplayed){
		$(".redis_settings").css({"display":"inline"});
		$("#redis_settings").html("-");
	} else{
		$(".redis_settings").css({"display":"none"});
		$("#redis_settings").html("+");
	}
	
	isSettingsDisplayed = !isSettingsDisplayed;
}

function displaySettings(){
	var hostname = $("[name=hostname]")[0].value;
	var port = $("[name=port]")[0].value;
	$("#settings_display").html(hostname + ":" + port);
}

function connectRedis(){
}

function setRedis(){
	displaySettings();
	connectRedis();
	toggleSettings();
}

$(document).ready(function(){
	$("#redis_settings").click(toggleSettings);
	$("[name=connect]").click(setRedis);
})
