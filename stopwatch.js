
// call the buttons from html 

let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

// set the min hrs sec to zero =0

let hour = 00;
let minute = 00;
let second = 00;
// let count=00;


// functions for start stop and reset 
startBtn.addEventListener('click', function () {
	timer = true;
	stopWatch();
});

stopBtn.addEventListener('click', function () {
	timer = false;
});

resetBtn.addEventListener('click', function () {
	timer = false;
	hour = 0;
	minute = 0;
	second = 0;
	// count=0;

	document.getElementById('hr').innerHTML = "00";
	document.getElementById('min').innerHTML = "00";
	document.getElementById('sec').innerHTML = "00";
	// document.getElementById('count').innerHTML="00";

});

// main function starts here 

function stopWatch() {
	if (timer) {
		second++;

		// if (count == 1000) {
		// 	second++;
		// 	count = 0;
		// }

		if (second == 60) {
			minute++;
			second = 0;
		}

		if (minute == 60) {
			hour++;
			minute = 0;
			second = 0;
		}

		let hrString = hour;
		let minString = minute;
		let secString = second;
		// let countString = count;

		if (hour < 10) {
			hrString = "0" + hrString;
		}

		if (minute < 10) {
			minString = "0" + minString;
		}

		if (second < 10) {
			secString = "0" + secString;
		}

		// if (count < 10) {
		// 	countString = "0" + countString;
		// }

		document.getElementById('hr').textContent = hrString;
		document.getElementById('min').textContent = minString;
		document.getElementById('sec').textContent = secString;
		// document.getElementById('count').textContent = countString;
		setTimeout(stopWatch, 1000);
	}
}


                                                                   // the end                         