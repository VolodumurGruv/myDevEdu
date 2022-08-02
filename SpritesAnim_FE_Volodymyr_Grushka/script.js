"use strict";

const dino = document.querySelector(".dino-sprite");
const cactus1 = document.querySelector(".cactus1");
const cactus2 = document.querySelector(".cactus2");
const cactus3 = document.querySelector(".cactus3");

document.addEventListener("keydown", (event) => {
	event.stopImmediatePropagation();
	jump();
});

function jump() {
	dino.animate(
		[
			{ transform: "translate3D(0, 0, 0)" },
			{ transform: "translate3D(0, -75px, 0)" },
			{ transform: "translate3D(0, 0, 0)" },
		],
		{
			duration: 600,
			easing: "linear",
			fill: "both",
		}
	);
	console.log(window.innerWidth);
}

const cactus1Pos = cactus1.getBoundingClientRect().left;
const cactus2Pos = cactus2.getBoundingClientRect().left;
const cactus3Pos = cactus3.getBoundingClientRect().left;

const windowWith = window.innerWidth;
let isSurvive = true;

const dinoIterval = setInterval(() => {
	const dinoLeft = parseInt(dino.getBoundingClientRect().left);
	const dinoTop = parseInt(dino.getBoundingClientRect().top);

	if (dinoTop === 100 && dinoLeft >= 230 && dinoLeft < 250) {
		isSurvive = false;

		alert("GAME OVER");
		document.location.reload();
	}

	if (dinoTop === 100 && dinoLeft >= 530 && dinoLeft < 550) {
		isSurvive = false;

		alert("GAME OVER");
		document.location.reload();
	}

	if (dinoTop === 100 && dinoLeft >= 730 && dinoLeft < 750) {
		isSurvive = false;

		alert("GAME OVER");
		document.location.reload();
	}

	if (dinoLeft >= windowWith - 20 && isSurvive) {
		isSurvive = true;

		alert("YOU WIN!!!");

		document.location.reload();
	}
}, 10);
