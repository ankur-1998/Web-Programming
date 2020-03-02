function alphanumposneg(inputText){
	var numbers;
	numbers = /^[-+]?[0-9]+$/;

	if(inputText.value.match(numbers)){
		alert("Correct...Try another");
		document.form1.text1.focus();
		return true;
	}
	else{
		alert("Please input correct format");
		document.form1.text1.focus();
		return false;
	}
}