$("#Phone").click(function(){
	$("#info-phone").toggleClass("on");
});
$("#info-phone .phone-close").click(function(){
    $("#info-phone").removeClass("on");
});

// "I am a" dropdown case
$("#user-type").change(function(){
	var value = $(this).val();

	console.log(value);

	switch(value) {
		case "Current Pathway Student":
			$("#topic").removeClass("hidden");
			break;
		case "Prospective Pathway Student":
			alert("Prospective Pathway Student!");
			break;
		case "Pathway Missionary":
			alert("Pathway Missionary!");
			break;
		case "Priesthood/Ecclesiastical Leader":
			alert("Priesthood/Ecclesiastical Leader!");
			break;
		case "Institute Director":
			alert("Institute Director!");
			break;
		case "PEF/Self-Reliance Manager":
			alert("PEF/Self-Reliance Manager!");
			break;
		case "Other":
			alert("Other!");
			break;
	}
});

// "Please help me with" dropdown case
$("#help-type").change(function(){
	var value = $(this).val();

	console.log(value);

	switch(value) {
		case "Enrollment":
			$("#selfhelp").removeClass("hidden");
			break;
		case "Tuition":
			alert("Tuition");
			break;
		case "After Pathway":
			alert("After Pathway");
			break;
		case "Courses":
			alert("Courses");
			break;
		case "Speaking Partners":
			alert("Speaking Partners");
			break;
		case "Gatherings":
			alert("Gatherings");
			break;
	}
});