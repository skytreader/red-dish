var isSettingsDisplayed = false;

function toggleSettings(){
	if(!isSettingsDisplayed){
		$(".redis_settings").css({"display":"inline"});
	} else{
		$(".redis_settings").css({"display":"none"});
	}
	
	isSettingsDisplayed = !isSettingsDisplayed;
}

$(document).ready(function(){
	$("#redis_settings").click(toggleSettings);
});
