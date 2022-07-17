"use strict";
const carInfo = {
	car: "audi",
	model: 8,

	getData() {
		console.log(this.car);
	},
};

function countryUsed(country) {
	if (this.car) {
		return { car: this.car, model: this.model, country };
	} else {
		return "no data";
	}
}

const ua = countryUsed.apply(carInfo, ["UA"]);

console.log(ua);

carInfo.getData();

const carCountry = {
	country: "new york",
	car: "BMW",
};

carCountry.getData = carInfo.getData;

carCountry.getData();
