import init, { initThreadPool, mandelbrot, mandelbrot_parallel } from "./pkg/mandelbrot.js";

console.log("Worker initialized");
console.log("Worker initialized");
await init();
console.log("Worker initialized");
init().then(() => {
	console.log("initted");
}).catch(e => {
	console.log(e)
});
//await initThreadPool(navigator.hardwareConcurrency);
//console.log("threadpooled");

onmessage = (message) => {
	let [width, height, scale, iterations, centerX, centerY, parallel] = message.data;
	let result = parallel
		? mandelbrot_parallel(width, height, scale, iterations, centerX, centerY)
		: mandelbrot(width, height, scale, iterations, centerX, centerY);
	postMessage(result)
}

onerror = (e) => {
	console.error(e)
}
