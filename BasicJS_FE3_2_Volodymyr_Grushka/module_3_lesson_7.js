"use strict";

const obj = {
	name: "Jim",
	age: 77,
	city: "London",
	id: 3,
};

console.log(Object.keys(obj));

obj.language = "English";

console.log(Object.values(obj));

console.log(Object.keys(obj).length);
console.log(Object.entries(obj));

for (const key in obj) {
	console.log(`${key}: ${obj[key]}`);
}

const newObj = {};

for (const key in obj) {
	newObj[key] = obj[key];
}

console.log(newObj);
console.log(Object.assign({}, obj));

newObj.simpleFun = () => {
	console.log("Simple function");
};

newObj.simpleFun();

Object.freeze(newObj);

newObj.id = 2;
newObj.surname = "Bob";

console.log(newObj);

console.log("surname" in newObj);

for (const key in newObj) {
	Object.defineProperty(newObj, key, { writable: false });
}

newObj.id = 2;
newObj.surname = "Bob";

console.log(newObj);

console.log("surname" in newObj);
