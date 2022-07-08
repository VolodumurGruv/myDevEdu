"use strict";
// task 2
const user = "Kate Smith";
const rate = 10;
const isOnline = true;
const placeFrom = "London is my city";

console.log(
	`user: ${user}\nrate: ${rate}\n\isOnline: ${isOnline}\nplaceFrom: ${placeFrom}`
);
console.log(
	`user: ${user}, rate: ${rate}, isOnline: ${isOnline}, placeFrom: ${placeFrom}`
);

// task 3
const admin = "ADMIN";
const num = 123;
const paragraph = document.querySelectorAll("p");

if (paragraph.length) {
	paragraph[0].innerText = admin;
	paragraph[1].innerText = num;
}

document.write(`<p>${admin}</p><p>${num}</p>`);
// task 4
const str1 = "Hello";
const str2 = "Vasya";

alert(`${str1} ${str2}`);

// task 5
const x = 9;

alert(x);

console.log(x * x);

document.write(x * x * x);

// task 6
const d = 7;

console.log(`${d}\n${d * d}\n${d * d * d}`);

// task 7
const six = 6;
const eight = 8;

document.write(`<p>${six * eight} six*eight</p>`);
document.write(`<p>${six + eight} six+eight</p>`);

// task 8
console.log(6 ** 5);

// task 9
const userName = prompt("What is your name", "anonimus :)");
alert(`Your name is ${userName}`);

// task 10
const age = +prompt("Type a number, please");
alert(age ** 2);
