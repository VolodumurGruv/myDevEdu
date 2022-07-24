const r = document.querySelector("#r");
const g = document.querySelector("#g");
const b = document.querySelector("#b");
const color = document.querySelector(".color");
const drawingField = document.querySelector(".drawing-field");
const brushShape = document.querySelector(".brush");
const width = document.querySelector(".horizontal");
const height = document.querySelector(".vertical");

let shape = "square";

width.max = 100;
width.min = 1;
height.max = 100;
height.min = 1;

let rgb = `rgb(${r.value}, ${g.value}, ${b.value})`;
console.log(color.style.backgroundColor);
color.style.backgroundColor = `rgb(${r.value}, ${g.value}, ${b.value})`;
console.log(color.style.backgroundColor);

r.addEventListener("change", () => {
	rgb = `rgb(${r.value}, ${g.value}, ${b.value})`;
	color.style.backgroundColor = rgb;
});
g.addEventListener("change", () => {
	rgb = `rgb(${r.value}, ${g.value}, ${b.value})`;
	color.style.backgroundColor = rgb;
});
b.addEventListener("change", () => {
	rgb = `rgb(${r.value}, ${g.value}, ${b.value})`;
	color.style.backgroundColor = rgb;
});

brushShape.addEventListener("click", (event) => {
	shape = event.path[0].classList.value;
});

drawingField.addEventListener("mouseup", (event) => {
	const el = document.createElement("div");
	console.log(rgb);
	el.classList.add(shape);
	el.style.width = width.value + "px";
	el.style.height = height.value + "px";
	el.style.border = "none";
	el.style.backgroundColor = rgb;
	el.style.display = "block";
	el.style.position = "absolute";
	el.style.top = event.y + "px";
	el.style.left = event.x + "px";
	drawingField.appendChild(el);
});
