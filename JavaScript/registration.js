function validateform(){
	var username, password, email, mob, id, add;
	username = document.myform.username.value;
	password = document.myform.password.value;
	email = document.myform.email.value;
	mob = document.myform.userid.value;
	add = document.myform.address.value;

	if(username=="" || username==null){
		alert("Username can not be null");
		return false;
	}
	else{
		var regex=/^([a-zA-Z]){6,15}$/;
		if(regex.test(username)==false){
			alert("Please enter character only with min length 6");
			return false;
		}
	}

	if(password=="" || password==null){
		alert("Password can not be null");
		return false;
	}
	else{
		var regex=/^([a-zA-Z0-9_-]){6,15}$/;
		if(regex.test(password)==false){
			alert("Minimum length 6 needed");
			return false;
		}
	}

	if(email==""||email==null){
		alert("Email cannot be null");
		return false;
	}
	else{
		var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if(regex.test(email)==false){
			alert("pls enter a valid email address");
		}
	}

	if(mob=="" || mob==null){
		alert("Mobile number can not be null");
		return false;
	}
	else{
		var regex= /^[1-9]\d{9}$/;
		if(regex.test(mob)==true){
			alert("Minimum length 10 needed");
			return false;
		}
	}

	if(add=="" || add==null){
		alert("Address can not be null");
		return false;
	}
	
}