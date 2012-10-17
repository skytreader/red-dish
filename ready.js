var isSettingsDisplayed = false;
// TODO Abstract with jQuery
var tabSections = ["manual", "scripted"];

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

/**
Enforced by convention: Tab headers are id'ed as section_head
while bodies are id'ed as section_body.
*/
function toggleTab(section){
	var limit = tabSections.length;
	
	for(var i = 0; i < limit; i++){
		if(tabSections[i] != section){
			$("#" + tabSections[i] + "_body").css({"display":"none"});
			$("#" + tabSections[i] + "_head").removeClass("selected");
		}
	}
	
	$("#" + section + "_body").css({"display":"inline"});
	$("#" + section + "_head").removeClass("unselected");
	$("#" + section + "_head").addClass("selected");
}

$(document).ready(function(){
	$("#redis_settings").click(toggleSettings);
	$("[name=connect]").click(setRedis);
	$("#manual_head").click(function(){toggleTab("manual");});
	$("#scripted_head").click(function(){toggleTab("scripted")});
})
