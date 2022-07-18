"use strict";

const btnGenerate = document.querySelector(".generate");
const btnOk = document.querySelector(".ok");
const inpt = document.querySelector("input");
const minNum = document.querySelector(".min-num");
const maxNum = document.querySelector(".max-num");
const chance = document.querySelector(".chance");
const popup = document.querySelector(".popup");
const popupWraper = document.querySelector(".popup-wraper");
const infoText = document.querySelector(".info-text");
const btnExit = document.querySelector(".exit");
const btnSrtart = document.querySelector(".start");

let currentChance;
let guessedValue;
// run and welcome msg
welcome();
start();

btnExit.addEventListener("click", (event) => {
	event.stopPropagation();

	stopGame();
});

btnSrtart.addEventListener("click", (event) => {
	event.stopPropagation();

	inpt.disabled = false;
	btnGenerate.disabled = false;
	start();
});

function start() {
	// set up default values
	inpt.value = "";
	inpt.min = 1;
	inpt.max = 100;
	minNum.textContent = inpt.min;
	maxNum.textContent = inpt.max;
	chance.textContent = 5;
	currentChance = +chance.textContent;
	guessedValue = randomValue(+minNum.textContent, +maxNum.textContent);

	btnGenerate.addEventListener("click", (event) => {
		event.stopImmediatePropagation();

		howClose();

		showMsg(currentChance);
		if (guessedValue === +inpt.value) {
			stopGame();
		}
		if (!currentChance) {
			stopGame();
		}

		console.log(guessedValue);

		--currentChance;
	});
}

function welcome() {
	popup.classList.add("active");
	popupWraper.classList.add("active");

	btnOk.addEventListener("click", () => {
		popup.classList.remove("active");
		popupWraper.classList.remove("active");
	});
}

function stopGame() {
	btnGenerate.disabled = true;
	inpt.disabled = true;
	inpt.value = "";
}

function validationInpt() {
	if (+inpt.value % 1 === 0 && +inpt.value >= 1 && +inpt.value <= 200) {
		return true;
	} else {
		return false;
	}
}

function validationChance() {
	if (currentChance % 1 === 0 && currentChance >= 1 && currentChance <= 15) {
		return true;
	} else {
		return false;
	}
}

function showMsg(currentChance) {
	if (+chance.textContent - 2 >= +currentChance) {
		infoText.textContent = `${log(howClose())} ${currentChance} спроб`;
	}
}

function log(msg) {
	return msg;
}

function randomValue(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function howClose() {
	let closeVal;
	if (+inpt.value > guessedValue) {
		closeVal = Math.abs(Math.floor((inpt.value / guessedValue) * 100) - 100);
	} else {
		closeVal = Math.abs(Math.floor((guessedValue / inpt.value) * 100) - 100);
	}

	console.log(closeVal);

	switch (true) {
		case closeVal === 0:
			return "You win";
		case closeVal <= 10:
			return "very close";
		case closeVal <= 20:
			return "close";
		case closeVal <= 30:
			return "warmer";
		case closeVal <= 40:
			return "cold";
		case closeVal <= 50:
			return "colder";
		default:
			return "too far";
	}
}
