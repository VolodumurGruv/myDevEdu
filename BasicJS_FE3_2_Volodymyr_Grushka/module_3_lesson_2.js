"use strict";
// task 1
if ("0") {
	alert("Привет");
}
// yes because of "0" is a string and it gives true

// task 2
const question = prompt("What is official name of JavaScript");

if (question !== null && question.toLowerCase() === "ecmascript") {
	alert("right");
} else {
	alert(`Don't you know? it's "ECMAScript"`);
}

// task 3
let number = prompt("Type your number here");

if (+number > 0) {
	alert(1);
} else if (+number < 0) {
	alert(-1);
} else if (+number === 0 && number !== null) {
	alert(0);
} else {
	alert("Seems you've typed not a number");
}
