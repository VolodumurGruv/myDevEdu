"use strict";

const car = {
	car: "Audi",
	model: 8,
};

function coutryUsed(counrty) {
	console.log(counrty, this.car, this.model);
}

const bindCoutryUsedCar = coutryUsed.bind(car, "Germany");
const applyCountryUsedCar = coutryUsed.apply(car, ["Italy"]);
const callCountryUsedCar = coutryUsed.call(car, "USA");

bindCoutryUsedCar();
applyCountryUsedCar;
callCountryUsedCar;

function sum(a, b) {
	return a + b;
}

function passArgs() {
	return this.a;
}

console.log(passArgs.call(sum, 5, 10));

function mult() {
	const first = Array.prototype.slice.apply(arguments, [0]);
	console.log(first.reduce((a, b) => a * b, 1));
	return [...arguments].reduce((a, b) => a * b, 1);
}

console.log(mult(1, 2, 3, 4));
