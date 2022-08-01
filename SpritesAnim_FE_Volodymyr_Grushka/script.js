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
	// if (dino.classList !== "jump") {
	// 	dino.classList.add("jump");
	// 	console.dir(dino.classList);

	// 	console.log(dino.classList);
	// }
	// setTimeout(() => dino.classList.remove("jump"), 300);
	dino.animate(
		[
			{ transform: "translate3D(0, 0, 0)" },
			{ transform: "translate3D(0, -75px, 0)" },
			{ transform: "translate3D(0, 0, 0)" },
		],
		{
			duration: 600,
			easing: "linear",
		}
	);
}

function isAlive() {
	const cactus1Pos = parseInt(
		window.getComputedStyle(cactus1).getPropertyValue("left")
	);
	const cactus2Pos = parseInt(
		window.getComputedStyle(cactus2).getPropertyValue("left")
	);
	const cactus3Pos = parseInt(
		window.getComputedStyle(cactus3).getPropertyValue("left")
	);
}

setInterval(() => {
	const dinoLeft = parseInt(
		window.getComputedStyle(dino).getPropertyValue("left")
	);
	const dinoTop = parseInt(
		window.getComputedStyle(dino).getPropertyValue("top")
	);
	// як отримати  dinoTop при застосуванні dino.animate(...)?
	console.log(dinoTop);
}, 10);
