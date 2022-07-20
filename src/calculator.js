const calculate = (num1, num2, op) => {
	num1 = +num1;
	num2 = +num2;

	switch (op) {
		case "plus":
			return num1 + num2;
		case "minus":
			return num1 - num2;
		case "mult":
			return num1 * num2;
		case "divine":
			if (num2 === 0) {
				return "Divine by zero impossible";
			}
			return num1 / num2;
	}
};

calculate(4, 0, "divine");

module.exports = { calculate };
