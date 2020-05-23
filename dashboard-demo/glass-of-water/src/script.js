window.addEventListener("load", function () {

	// GLOBAL VARIABLES

	var myDate = new Date();
	// Create current day variable. (0-6);
	var currentDay = myDate.getDay();
	// Create a copy of currentDay var to check if user is still on the same day
	let currentDayCopy = currentDay;
	// Btn Handle Add Glass
	var addGlass = document.getElementById("addGlass");
	//Btn handle reset
	var reset = document.getElementById("resetBtn");
	//Create handle to water num paragraph
	var paragraphHandle = document.getElementById("numOfGlassesToday");

	// EVENT HANDLERS
	addGlass.addEventListener("click", addNewGlass);
	reset.addEventListener("click", resetMe);


	//When the window first loads, check for local storage -

	if (typeof (Storage) !== undefined) {

		// Check to see if user has already started their water count
		if (localStorage.glassesOfWaterToday) {

			// If they have, show their current number of glasses of water
			paragraphHandle.innerHTML = localStorage.glassesOfWaterToday;
			// create temp var to send to next function
			var numOfGlasses = localStorage.glassesOfWaterToday;
			//Run function incharged of setting appropriate animation height
			setWaterAmount(numOfGlasses);


		} else {

			paragraphHandle.innerHTML = 0;

		}

	}

	//FUNCTIONS 

	function addNewGlass() {

		// if DATE IS EQUAL -
		if (currentDayCopy == myDate.getDay()) {

			//  IF LOCAL STORAGE IS AVAILABLE -
			if (typeof (Storage) !== undefined) {

				// If variable "glassesOfWaterToday" exists in local Storage - 
				if (localStorage.glassesOfWaterToday) {


					// 1)  get glassesOfWaterToday. sum it by one.
					localStorage.glassesOfWaterToday++;

					// 2) Update value on screen
					paragraphHandle.innerHTML = localStorage.glassesOfWaterToday;

					// 3) Store localStorage.glassesOfWaterToday inside a  temporary variable
					var numOfGlasses = localStorage.glassesOfWaterToday;

					// 4) pass numOfGlasses variable to a new function
					setWaterAmount(numOfGlasses);


				}

				// If variable DOES NOT exist
				else {

					// 1) Create the variable and set it to 1
					localStorage.glassesOfWaterToday = 1;
					// 2) Update the value on screen
					paragraphHandle.innerHTML = localStorage.glassesOfWaterToday;
					// 3) store thr value inside a temporary variable
					var numOfGlasses = localStorage.glassesOfWaterToday;
					// 4) pass numOfGlasses var to next function
					setWaterAmount(numOfGlasses);
				}

			}

			// if LOCAL STORAGE IS NOT AVAILABLE -
			else {

				alert("Local Storage Is Not Supported");

			}


		}
		// if DATE IS NOT EQUAL - 
		else {

			console.log("Date is different");

		}

	}

	function setWaterAmount(glasses) {

		//console.log(glasses);
		switch (glasses) {
		case "0":
			$('.water').animate({
				height: '0%'
			}, 1000)
			break;
		case "1":
			$('.water').animate({
				height: '12.5%'
			}, 1000)
			break;
		case "2":
			$('.water').animate({
				height: '25%'
			}, 1000)
			break;
		case "3":
			$('.water').animate({
				height: '37.5%'
			}, 1000)
			break;
		case "4":
			$('.water').animate({
				height: '50%'
			}, 1000)
			break;
		case "5":
			$('.water').animate({
				height: '62.5%'
			}, 1000)
			break;
		case "6":
			$('.water').animate({
				height: '75%'
			}, 1000)
			break;
		case "7":
			$('.water').animate({
				height: '87.5%'
			}, 1000)
			break;
		case "8":
			$('.water').animate({
				height: '100%'
			}, 1000);
        setTimeout(function(){
          
          resetMe();
          
        }, 1000)
			break;
		default:
			console.log("Something went wrong");

		}

	}

	function resetMe() {

		// Check for local Storage 
		if (typeof (Storage) !== undefined) {

			if (localStorage.glassesOfWaterToday) {

				localStorage.glassesOfWaterToday = 0;
				paragraphHandle.innerHTML = localStorage.glassesOfWaterToday;

				//animation?
				$('.water').animate({
					height: '0%'
				}, 1000)

			}


		}
		// If local storage is not available
		else {

			alert("No local storage found");


		}

	}

});