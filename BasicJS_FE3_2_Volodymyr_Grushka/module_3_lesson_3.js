"use strict";

// numbers

let check;

if (!check) {
	check = true;
}

let number16 = 16;

if (number16) {
	console.log("Congrads number exist");
}

if (number16 % 2 === 0) {
	console.log("Congrads number is even");
} else {
	console.log("Number is odd");
}

let chnagedNumber16 = number16 + 3;

console.log(`number16: ${chnagedNumber16}`);

if (number16 < chnagedNumber16) {
	console.log(`changedNumber16: ${chnagedNumber16}`);
} else if (number16 > chnagedNumber16) {
	console.log("It's bigger than it needs");
}

// strings
let welcome = "Welcome to shcool";

console.log(welcome ? "The string isn't empty" : "The string is empty");

let welcomeUpperCase = welcome.toUpperCase();

console.log(`welcome: ${welcome}\n welcomeUpperCase: ${welcomeUpperCase}`);

// objects
const userData = {
	name: "Nick",
	age: 55,
	role: "CEO",
};

userData.married = true;

let countKeys = 0;

for (const key in userData) {
	countKeys++;
	console.log(`${key} - ${userData[key]}`);
	if (key === "CEO") {
		userData.location = "Dnepr";
		console.log(userData.location);
	}
}

console.log(countKeys);

function someFun(a) {
	if (a !== NaN) {
		if (a < 10) {
			return a * 2;
		} else {
			return a / 10;
		}
	}
}

function twoLetterUpperCase(str1, str2) {
	let newStr1 = str1.slice(0, 1).toUpperCase() + str1.slice(1);
	let newStr2 = str2.slice(0, 1).toUpperCase() + str2.slice(1);
	console.log(newStr1 + newStr2);
}

twoLetterUpperCase("java", "script");

someFun(15);
