const calculate = require("./calculator");

test("Testing calc", () => {
	expect(calculate.calculate(2, 5, "plus")).toBe(7);
	expect(calculate.calculate("2", "5", "plus")).toBe(7);
	expect(calculate.calculate(4, 2, "divine")).toBe(2);
	expect(calculate.calculate("4", "2", "divine")).toBe(2);
	expect(calculate.calculate(4, 0, "divine")).toBe("Divine by zero impossible");
	expect(calculate.calculate(4, 2, "mult")).toBe(8);
	expect(calculate.calculate("4", "2", "mult")).toBe(8);
	expect(calculate.calculate("4", "2", "minus")).toBe(2);
	expect(calculate.calculate(4, 2, "minus")).toBe(2);
});
