//display login popup, help from https://www.w3schools.com/js/js_popup.asp
function goToContactPg(){
  let text;
  let continueTo = prompt("Continue to contact page", "y/n");

  if(continueTo != null){
  	//used https://careerkarma.com/blog/javascript-go-to-url/ 
  	window.location.assign('contact.html');  
  }


  }