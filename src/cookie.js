"use strict";

let openReq = indexedDB.open("storage", 1);
console.log(openReq);

openReq.onupgradeneeded = () => {
	console.log("upreeded");
};
openReq.onerror = () => {
	console.log("errore", openReq.error);
};

openReq.onsuccess = () => {
	console.log("success", openReq.result);
};

console.log(encodeURIComponent("my name"));
const bc = new BroadcastChannel("test");

bc.postMessage("hello");

bc.onmessage = () => {
	alert();
};
console.log(bc);

let body = document.querySelector("body");
let script = document.createElement("script");

script.textContent = "alert('hello')";
console.log(script);
body.appendChild(script);
