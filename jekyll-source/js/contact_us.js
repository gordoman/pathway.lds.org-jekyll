---
---
var JSONdata = [];

$('document').ready(function() {
	// Populate Page with JSON Data
	$.getJSON("{{site.baseurl}}js/json/contact_us.json", function(data) {
		JSONdata = data;
		$.each( JSONdata, function(key, val) {
			console.log(val);
			$("#user-type").append("<option>" + val.Audience + "</option>")
		});

	}).fail(function() {
		console.log("Could not load JSON");
		$("#user-type, #help-type").append("<option disabled='disabled'>ERROR: Could not load database</option>");
	}).always(function(){
		$("[data-temp-id='loading']").remove();
	});
});


$("#Phone").click(function(){
	$("#info-phone").toggleClass("on");
});
$("#info-phone .phone-close").click(function(){
    $("#info-phone").removeClass("on");
});


// "I am a" dropdown case
$("#user-type").change(function(){
	var value = $(this).val();

	$.each(JSONdata, function(key, val) {
		//find the audience selected
		if (val.Audience == value) {
			//remove any previous populated values
			$("#help-type option[data-temp-id='database']").remove();
			//populate the topics selection dropdown
			$.each(val.Topics, function(k, v) {
				$("#help-type").append("<option data-temp-id='database'>" + v.Topic + "</option>");
			});
			return false;
		};
	});
});

// "Please help me with" dropdown case
$("#help-type").change(function(){
	var topicValue = $(this).val();
	var audienceValue = $("#user-type").val();

	//unhide self help suggestions
	$("#selfhelp").removeClass("hidden");

	//populate self help suggestions
	$.each(JSONdata, function(key1, val1) {
		//find the audience selected
		if (val1.Audience == audienceValue) {
			$.each(val1.Topics, function(key2, val2) {
				if (val2.Topic == topicValue) {
					//remove any previous populated values
					$("#selfHelpList [data-temp-id='database']").remove();
					$("#selfHelpList [data-temp-id='loading']").remove();
					//populate the topics selection dropdown
					$.each(val2.Links, function(k, v) {
						$("#selfHelpList").append("<div data-temp-id='database' class='item'><a href='" + v.URL + "'>" + v.Title + "</a></div>")
					});
					return false;
				}
			});
			return false;
		};
	});
});



