//Seccion para acceder a formulario
var formValid;

function validateForm() {
	//set initial value of formValid to true
	formValid = 1;
	resetErrors();


	//validate select menu
	var z = document.forms["myForm"]["favcity"].value;
	if (z == 0) {
		applyError("favcity","&nbsp;You must choose a favorite city."); 
	}
	//validate radio buttons
	if(validateGroup("shipping")==false) {
		document.getElementById("shippingLegendError").style.padding = "0 5px";
		applyError("shippingLegend","Please pick a shipping method.");
	}
	//validate checkboxes
	if(validateGroup('toppings')==false) {
		document.getElementById("toppingsLegendError").style.padding = "0 5px";
		applyError("toppingsLegend","You must pick at least one topping.");
	}
	//validate input fields
	var x = document.forms["myForm"]["sample"].value;
	if (x == "") {
		applyError("sample","&nbsp;You must enter some text here.");
	}
	var z = document.forms["myForm"]["lname"].value;
	if (z == "") {
		document.getElementById("lnameErrorHidden").innerHTML = "You must enter your last name.";
		applyError("lname","&nbsp;You must enter your last name.");
	}
	var y = document.forms["myForm"]["fname"].value;
	if (y == "") {
		document.getElementById("fnameErrorHidden").innerHTML = "You must enter your first name.";
		applyError("fname","&nbsp;You must enter your first name.");
	}
	//if a form field is not valid, do not submit form
	if (formValid == 0){
		
    return false;
	}
}

//Validates Instruments custom select menu


//Appends error message to label, puts focus on field with error message
function applyError(errorFieldId,errorMessage){
	var errorMessageId = errorFieldId + "Error";
	document.getElementById(errorMessageId).innerHTML = errorMessage; //puts error in span tag
	document.getElementById(errorFieldId).focus(); //puts focus on field with error
	formValid = 0; //sets global formValid variable to false
  
}

//validates grouped form fields like checkboxes or radio buttons. Accepts the name of the group to be validated.
function validateGroup(groupName){
	var group = document.getElementsByName(groupName);
	var groupCount = 0;
	for (var i = 0; i < group.length; i++) {
		if (group[i].checked) {
			groupCount++;
		}
	}
	if (groupCount < 1) {
		return false;
	}
	return true;
}

//resets error messages so they are turned off
function resetErrors(){
	document.getElementById("fnameError").innerHTML = "";
	document.getElementById("fnameErrorHidden").innerHTML = "";
	document.getElementById("lnameError").innerHTML = "";
	document.getElementById("lnameErrorHidden").innerHTML = "";
	document.getElementById("sampleError").innerHTML = "";
	document.getElementById("toppingsLegendError").innerHTML = "";
	document.getElementById("shippingLegendError").innerHTML = "";
	document.getElementById("favcityError").innerHTML = "";
}
// Seccion de login para pastelero
$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
 });