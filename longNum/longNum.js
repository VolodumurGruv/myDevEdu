console.log(getSum("123", "327")); //-> "447"

console.log(
	getSum(
		"111111111111111111111111111111111111111111111111111",
		"23333333333333333333333333333333333333333333333333"
	)
);

// -> "3444444.......4444444"

function getSum(num1, num2) {
	let result = "";

	for (let i = 0; i < num1.length; i++) {
		if (num1[i] && num2[i]) {
			result += +num1[i] + +num2[i];
		} else if (num1[i]) {
			result += num1[i];
		} else if (num2[i]) {
			result += num2[i];
		}
	}

	return result;
}
