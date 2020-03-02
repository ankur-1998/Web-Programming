function alphaNumeric(inputText){
	var letters;
	letters = /^[0-9a-zA-Z]+$/;

	if(inputText.value.match(letters)){
		alert("Your reg num have been accepted. You can try another.");
		document.form1.text1.focus();
		return true;
	}
	else{
		alert("Pls enter alphanumeric characters only.");
		return false;
	}
}