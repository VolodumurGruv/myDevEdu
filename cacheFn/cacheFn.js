"use strict";

let complexFunction = function (arg1, arg2) {
	return arg1 + arg2;
};

function cache(fn) {
	const ch = {};

	return function (arg1, arg2) {
		console.log(ch[arg1] !== arg2);
		if (ch[arg1] !== arg2) {
			ch[arg1] = fn.call(null, "", arg2);
			return ch;
		}
		console.log("cache");
		return ch;
	};
}

let cachedFunc = cache(complexFunction);

console.log(cachedFunc("foo", "bar")); // complexFunction должна выполнится

console.log(cachedFunc("foo", "bar")); // complexFunction не должна выполняться // снова,должен вернуться кеш

console.log(cachedFunc("foo", "baz")); // complexFunction должна выполнится
