"use strict";

const arr1 = [1, 2, 3];
const arr2 = ["a", "b", "c"];

console.log(typeof arr1[0]);
console.log(typeof arr2[0]);

const arr3 = arr1.concat(arr2);

console.log(arr3);

for (let i = 0; i < arr3.length; i++) {
	if (i === 0 || i === 3) {
		console.log(typeof arr3[i]);
	}
}

const reversearr3 = arr3.reverse();
const reverseArr3For = [];

for (let i = 0; i < arr3.length; i++) {
	reverseArr3For.push(arr3[i]);
}

console.log(reverseArr3For);
console.log(reversearr3);

const arr4 = [];

for (let i = 0; i < arr3.length; i++) {
	if (typeof arr3[i] !== "number") {
		arr4.push(arr3[i]);
	}
}

console.log(arr4);

let arr5 = [];
let str = "";

for (let elem of arr4) {
	str += elem;
}

arr5 = arr4.join("").split(" ");

console.log(arr5);

arr5 = [str];

console.log(arr5);

arr5.unshift(100);
arr5.push(1);

console.log(arr5);

arr5.sort();

console.log(arr5);

arr5.sort(compare);

console.log(arr5);

function compare(a, b) {
	if (a < b && !isNaN(a) && !isNaN(b)) {
		return 1;
	}
	if (a > b && !isNaN(a) && !isNaN(b)) {
		return -1;
	}

	return 0;
}
