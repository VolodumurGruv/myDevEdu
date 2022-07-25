// first task
const hoverBtn = document.querySelector(".hoverButton");
const hoveredResult = document.querySelector(".hoverResult");
const colors = ["red", "blue", "green", "orange", "purple"];
let counter = 0;

hoverBtn.addEventListener("mouseover", (event) => {
	const li = document.createElement("li");

	li.style.color = araySteper(colors);
	li.textContent = "Hovered";

	hoveredResult.appendChild(li);
});

function araySteper(arr) {
	if (counter > arr.length - 1) {
		counter = 0;
	}
	console.log(counter);
	return arr[counter++];
}

// second task
const clickBtn = document.querySelector(".clickButton");
const clickResult = document.querySelector(".clickResult");

const deleteQueue = ["six", "two", "three", "four", "one", "five"];
const addingQueue = ["one", "two", "three", "four", "five", "six"];

clickBtn.addEventListener("click", () => {
	if (Object.values(clickResult.classList).includes(deleteQueue[counter])) {
		clickResult.classList.remove(araySteper(deleteQueue));
	} else {
		clickResult.classList.add(araySteper(addingQueue));
	}
});

// third task
// . На третью кнопку повесить обработчик, который по клику будет выводить в блок с результатом поочерёдно текст с один из цветов светофора:
const lightBtn = document.querySelector(".lightButton");
const lightResult = document.querySelector(".lightResult");
const traficLight = ["red", "yellow", "green", ""];

lightBtn.addEventListener("click", () => {
	lightResult.style.color = araySteper(traficLight);

	lightResult.textContent = "some text";
});

// fourth task
const keyboardButton = document.querySelector(".keyboardButton");
const keyboardResult = document.querySelector(".keyboardResult");
let keypress = 0;

keyboardButton.addEventListener("keyup", () => {
	keyboardResult.textContent = countKeyPress();
});

function countKeyPress() {
	const numbers = {
		1: "one",
		2: "two",
		3: "three",
		4: "four",
		5: "five",
		6: "six",
		7: "seven",
		8: "eight",
		9: "nine",
		0: "zero",
	};
	keypress++;

	if (keypress > 10 && keypress < 100) {
		return (
			numbers[keypress.toString()[0]] + " " + numbers[keypress.toString()[1]]
		);
	}

	if (keypress >= 100) {
		return (
			numbers[keypress.toString()[0]] +
			" " +
			numbers[keypress.toString()[1]] +
			" " +
			numbers[keypress.toString()[2]]
		);
	}

	return numbers[keypress];
}
