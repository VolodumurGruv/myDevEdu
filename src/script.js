const btn = document.querySelector("button");
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const op = document.querySelector("#operator");
const result = document.querySelector(".result");

btn.addEventListener("click", () => {
	result.textContent = calculate(+num1.value, +num2.value, op.value);
});

function calculate(num1, num2, op) {
	switch (op) {
		case "plus":
			return num1 + num2;
		case "minus":
			return num1 - num2;
		case "mult":
			return num1 * num2;
		case "divine":
			if (num2 === 0) {
				// throw new Error("Divine by zero impossible");
				return "Divine by zero impossible";
			}
			return num1 / num2;
	}
}
