"use strict";

const price = 25;
const result = [];

function tickets(arr) {
	let sum = 0;
	let current = 0;
	let next = 0;
	let result = [];

	for (let i = 0; i < arr.length; i++) {
		result.push(arr[i]);
		if (result.reduce((a, b) => b - a, 0) === 75) {
			return "No";
		}
	}

	return "yes";
}

console.log(tickets([25, 25, 50])); // => YES
console.log(tickets([25, 100])); // => NO. Vasya will not have enough money to give change to 100 dollars
console.log(tickets([25, 50])); // => YES. Vasya will not have enough money to give change to 100 dollars
console.log(tickets([25, 25, 50, 100])); // Yes
console.log(tickets([25, 50, 100])); // No
console.log(tickets(["25", "25", "50", "100"])); // Yes
console.log(tickets(["25", "50", "100"])); // No
console.log(tickets(["100", "50", "50"])); // No
console.log(tickets(["25", "50", "100"])); // No
