var isSettingsDisplayed = false;
// Will be filled with getTabSections once page has loaded.
var tabSections;

// Some needed values
var lastUnderscoreRegex = /(?=.*_.*)*_(?!.*_.*)/;

function getTabSections(){
	var tabSections = []
	// Will return div for each tab header.
	var tabheads = $(".tab_headers").children();
	// Get each contained span for each div and get id.
	var divCount = tabheads.length;
	
	for(var i = 0; i < divCount; i++){
		var span = $(tabheads[i]).children()[0];
		var spanId = span.id;
		// FIXME Strip on rightmost delimiter.
		var sectionName = spanId.split(lastUnderscoreRegex)[0];
		tabSections.push(sectionName);
	}
	
	return tabSections;
}

/**
Show/Hide function for settings app block.
*/
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
			var headParent = $("#" + tabSections[i] + "_head").parent();
			headParent.removeClass("selected");
			headParent.addClass("unselected");
		}
	}
	
	$("#" + section + "_body").css({"display":"inline"});
	var chosenHeadParent = $("#" + section + "_head").parent();
	chosenHeadParent.removeClass("unselected");
	chosenHeadParent.addClass("selected");
}

$(document).ready(function(){
	window.tabSections = getTabSections();
	
	$("#redis_settings").click(toggleSettings);
	$("[name=connect]").click(setRedis);
	$("#manual_head").click(function(){toggleTab("manual");});
	$("#scripted_head").click(function(){toggleTab("scripted")});
})
