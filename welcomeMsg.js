/*Change Welcome Message on screen based on time of day*/
function checkTime(){
	var currentTime = new Date();
	var currentHour = currentTime.getHours();
	var midDay = 12
	if(currentHour > midDay){
		document.getElementById("welcomeMessage").innerHTML = "Good Morning";
	}
	else if(currentHour < midDay){
		document.getElementById("welcomeMessage").innerHTML = "Good Afternoon";
	}
	else{
		document.getElementById("welcomeMessage").innerHTML = "Good Day";
	}
}

checkTime();