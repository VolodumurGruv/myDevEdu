const colorPanel = document.querySelector(".colors");
const drawingField = document.querySelector(".drawing-field");
const brushShape = document.querySelector(".brush");
const width = document.querySelector(".horizontal");
const height = document.querySelector(".vertical");
let color = "";
let shape = "square";

width.max = 100;
width.min = 1;
height.max = 100;
height.min = 1;

colorPanel.addEventListener("click", (event) => {
	event.stopPropagation();
	color = event.path[0].classList.value;
});

brushShape.addEventListener("click", (event) => {
	shape = event.path[0].classList.value;
});

drawingField.addEventListener("mouseup", (event) => {
	const el = document.createElement("div");

	el.classList.add(shape);
	el.style.width = width.value + "px";
	el.style.height = height.value + "px";
	el.style.border = "none";
	el.style.backgroundColor = color;
	el.style.display = "block";
	el.style.position = "absolute";
	el.style.top = event.y + "px";
	el.style.left = event.x + "px";
	drawingField.appendChild(el);
});
