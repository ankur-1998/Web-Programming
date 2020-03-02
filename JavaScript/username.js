function stringlength(inputText, minlength, maxlength){
	var field, mnlen, mxlen;
	field = inputText.value;
	mnlen = minlength;
	mxlen = maxlength;

	if(field.length < mnlen || field.length > mxlen){
		alert("Input should be between "+mnlen+" to "+mxlen+" Characters");
		return false;
	}
	else{
		alert("Your user ID is accepted");
		return true;
	}
}