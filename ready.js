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
		var sectionName = spanId.split(lastUnderscoreRegex)[0];
		tabSections.push(sectionName);
	}
	
	return tabSections;
}

function setBlockVisibilities(showList){
	var appBlocks = $(".block_button");
	var limit = appBlocks.length;
	
	for(var i = 0; i < limit; i++){
		var thisID = appBlocks[i].id;
		
		if(showList.indexOf(thisID) >= 0){
			appBlocks[i].innerHTML = "-";
			$("." + thisID).css({"display":"block"});
		} else{
			appBlocks[i].innerHTML = "+";
			$("." + thisID).css({"display":"none"});
		}
	}
}

/**
Show/Hide toggle function for app blocks.

Enforced by convention: the toggle button is classed as
blockName, then the section it shows and hides is id'ed
as blockName;
*/
function toggleBlockVisibility(blockName){
	var currentDisplay = $("." + blockName)[0].style.display;
	
	if(currentDisplay == "none"){
		$("." + blockName).css({"display":"block"});
		$("#" + blockName).html("-");
	} else{
		$("." + blockName).css({"display":"none"});
		$("#" + blockName).html("+");
	}
}

// TODO: Cache calls!
function displaySettings(){
	var hostname = $("[name=hostname]")[0].value;
	var port = $("[name=port]")[0].value;
	$("#settings_display").html(hostname + ":" + port);
}

function testRedis(){
	var hostname = $("[name=hostname]")[0].value;
	var port = $("[name=port]")[0].value;
	
	$("#redis_test_result").load("connect.php", "host=" + hostname + "&port=" + port);
}

// FIXME Form still gets cleared even when set has failed.
function clearValueSet(){
	//$("[name=key]")[0].value = "";
	//$("[name=value]")[0].value = "";
}

function putRedis(){
	var hostname = $("[name=hostname]")[0].value;
	var port = $("[name=port]")[0].value;
	var key = $("[name=key]")[0].value;
	var value = $("[name=value]")[0].value;
	
	$("#put_result").load("set.php", "host=" + hostname + "&port=" + port + "&key=" + key + "&value=" + value, clearValueSet);
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
			//$("#" + tabSections[i] + "_body").removeClass("selected_body");
			console.log("display noned: " + "#" + tabSections[i] + "_body")
			var headParent = $("#" + tabSections[i] + "_head").parent();
			headParent.removeClass("selected");
			headParent.addClass("unselected");
		}
	}
	
	$("#" + section + "_body").css({"display":"block"});
	var chosenHeadParent = $("#" + section + "_head").parent();
	chosenHeadParent.removeClass("unselected");
	chosenHeadParent.addClass("selected");
}

/**
Creates a new row (but does not append!) for the map entry
section.

@return A tr element containing an entry field for new key-value
pairing entry.
*/
function createNewMapRow(){
	var newKey = document.createElement("input");
	newKey.type = "text";
	newKey.name = "key[]";
	$(newKey).focus(addNewMapRow).focusout(removeMapRow);
	
	var newVal = document.createElement("input");
	newVal.type = "text";
	newVal.name = "value[]";
	$(newVal).focus(addNewMapRow).focusout(removeMapRow);
	
	var keyCell = document.createElement("td");
	keyCell.appendChild(newKey);
	
	var valCell = document.createElement("td");
	valCell.appendChild(newVal);
	
	var newRow = document.createElement("tr");
	newRow.appendChild(keyCell);
	newRow.appendChild(valCell);
	
	return newRow;
}

/**
Adds a new row to the map entry section.
*/
function addNewMapRow(){
	window.lastMapRowAdded = createNewMapRow();
	clearFocus();
	$("#map_entry")[0].appendChild(window.lastMapRowAdded);
}

/**
Removes the most last row in the map_entry table if the row
that triggered it's creation was left untouched.
*/
function removeMapRow(){
	// Check first
	var keys = document.getElementsByName("key[]");
	var values = document.getElementsByName("value[]");
	var recentKeyTrigger = keys[keys.length - 2];
	var recentValTrigger = values[values.length - 2];
	
	var blankKeyTrigger = recentKeyTrigger.value == "";
	var blankValTrigger = recentValTrigger.value == "";
	
	console.log("blank key? " + blankKeyTrigger);
	
	if(blankKeyTrigger || (blankKeyTrigger && blankValTrigger)){
		var mapTable = document.getElementById("map_entry");
		var keyvalPairings = mapTable.children;
		mapTable.removeChild(keyvalPairings[keyvalPairings.length - 1]);
		
		// reassign event triggers to the key triggers
		$(recentKeyTrigger).focus(addNewMapRow).focusout(removeMapRow);
		$(recentValTrigger).focus(addNewMapRow).focusout(removeMapRow);
	}
}

/**
Turn off all onfocus listeners except for the most recently
added row.
*/
function clearFocus(){
	var keys = document.getElementsByName("key[]");
	var mostRecentKey = keys[keys.length - 1];
	
	var values = document.getElementsByName("value[]");
	var mostRecentValue = values[values.length - 1];
	
	$(mostRecentKey).off("focus");
	$(mostRecentValue).off("focus");
}

$(document).ready(function(){
	window.tabSections = getTabSections();
	
	// Set the toggle buttons and their respective contents.
	setBlockVisibilities(["redis_settings"]);
	
	// Set the event listeners on the app block buttons.
	$("#redis_settings").click(function(){toggleBlockVisibility("redis_settings")});
	$("#key_value_data").click(function(){toggleBlockVisibility("key_value_data")});
	$("#hash_map_data").click(function(){toggleBlockVisibility("hash_map_data")});
	
	$("[name='test_server']").click(testRedis);
	$("#manual_head").click(function(){toggleTab("manual");});
	$("#scripted_head").click(function(){toggleTab("scripted")});
	$("[name='redis_put']").click(putRedis);
	
	$("[name='key[]']").focus(addNewMapRow).focusout(removeMapRow);
	$("[name='value[]']").focus(addNewMapRow).focusout(removeMapRow);
})
