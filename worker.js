import init, { initThreadPool, mandelbrot, mandelbrot_simple, mandelbrot_parallel } from "./pkg/mandelbrot.js";

// init already called in index.js, but Safari still requires it here
await init();
await initThreadPool(navigator.hardwareConcurrency);

onmessage = (message) => {
	let [width, height, scale, iterations, centerX, centerY, renderStrategy] = message.data;
	switch (renderStrategy) {
		case "w":
			postMessage(mandelbrot(width, height, scale, iterations, centerX, centerY))
			break;
		case "ws":
			postMessage(mandelbrot_simple(width, height, scale, iterations, centerX, centerY))
			break;
		default:
			postMessage(mandelbrot_parallel(width, height, scale, iterations, centerX, centerY))
			break;
	}
}

onerror = (e) => {
	console.error(e)
}
