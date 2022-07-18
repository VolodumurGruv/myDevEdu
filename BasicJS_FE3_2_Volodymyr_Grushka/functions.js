"use strict";

function numToStr(num) {
	if (!isNaN(num)) {
		return num >= 0 && num <= 999e12 ? num.toString() : "";
	}
	return "it's not a number";
}

console.log(numToStr(100));

function strToNum(str) {
	if (!isNaN(+str)) {
		return +str;
	}
	return "it's not a number";
}

console.log(strToNum("1a23"));
console.log(999e12);
