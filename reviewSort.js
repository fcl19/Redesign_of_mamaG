/*Function to sort reviews based on check box value
  --Made Using https://www.javascripttutorial.net/javascript-dom/javascript-checkbox/*/
function reviewSorter(){
	const location1 = document.querySelector('#sarasota');
	const location2 = document.querySelector('#stPete');

	const sortBtn = document.querySelector('#sortButton');

	sortBtn.onclick = () => {
		const result1 = location1.value;
	   // alert(result1); // on
	    const result2 = location2.value;
	   // alert(result2);
	   if(result1 == "on"){
	   		document.getElementById("review1").innerHTML = <p><img src="images/review1.jpg" alt="picture of coffee stands" 
	   															width="100" height="150" align="left"> 
	   															<b>Sarasota 11/20</b><br>Mama G's is a pretty, family 
	   															bakery off of 41.  They have excellent pricing 
	   															and great service.  I always make sure to stop by. - User105"</p>;
	   }
	   else if(result2 == "on"){
	   		document.getElementById("review3").innerHTML = <p id="review3"><img src="images/review2.jpg" alt="picture of counter" width="100" height="150" align="left"> <b>St Pete 11/15</b><br>Amazing danishes and bread.  Good service with a friendly attitude - User14
						</p>
	   }

	   else if(result1== "on" && result2 =="on"){
	   		document.getElementById("review1").innerHTML = <p><img src="images/review1.jpg" alt="picture of coffee stands" 
	   															width="100" height="150" align="left"> 
	   															<b>Sarasota 11/20</b><br>Mama G's is a pretty, family 
	   															bakery off of 41.  They have excellent pricing 
	   															and great service.  I always make sure to stop by. - User105"</p>;
	   		document.getElementById("review3").innerHTML = <p id="review3"><img src="images/review2.jpg" alt="picture of counter" width="100" height="150" align="left"> <b>St Pete 11/15</b><br>Amazing danishes and bread.  Good service with a friendly attitude - User14
						</p>
	   }
	   }
	}
}

reviewSorter();