function val(){

var username, password, email, mob, id, add;
	username = document.myform.username.value;
	password = document.myform.password.value;
	email = document.myform.email.value;
	mob = document.myform.userid.value;
	add = document.myform.address.value;
//var regex= /^[9]\d{10}$/;
 var regex = /^\d{10}$/;
		if(regex.test(mob)==true){
			alert("Minimum length 10 needed");
			return false;
		}
	}