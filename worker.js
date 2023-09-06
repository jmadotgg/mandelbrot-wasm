import { initThreadPool, mandelbrot_parallel } from "./pkg/mandelbrot.js";

// init already called in index.js
await initThreadPool(navigator.hardwareConcurrency);

onmessage = (message) => {
	let [width, height, scale, iterations, centerX, centerY] = message.data;
	postMessage(mandelbrot_parallel(width, height, scale, iterations, centerX, centerY))
}

onerror = (e) => {
	console.error(e)
}
