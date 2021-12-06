/*Function to check email for "@" symbol*/
function checkEmail() { 
	var elCheck = document.getElementById('emailCheck'); 
	var containsEmail = false;
	for(var i = 0; i < elCheck.length; i++) {
		if(elCheck[i] == "@"){
			containsEmail = true;
			break

		}
		else{
			containsEmail = false;
		}

	}
	if (containsEmail == false) { 
		elCheck.textContent = "Please Enter a Valid Email Address";
	}
	else{
		elCheck.textContent = ""
	}


var elEmail = document.getElementById('email1') ;  
elEmail.onblur = checkEmail(); 