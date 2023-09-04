import init, { initThreadPool, mandelbrot, mandelbrot_simple, mandelbrot_parallel } from "./pkg/mandelbrot.js";

await init();
await initThreadPool(navigator.hardwareConcurrency);

onmessage = (message) => {
	let [width, height, scale, iterations, centerX, centerY, mode] = message.data;
	let result;
	if (mode == 'w') {
		result = mandelbrot(width, height, scale, iterations, centerX, centerY)
	} else if (mode == 'ws') {
		result = mandelbrot_simple(width, height, scale, iterations, centerX, centerY);
	} else {
		result = mandelbrot_parallel(width, height, scale, iterations, centerX, centerY)
	}
	postMessage(result)
}

onerror = (e) => {
	console.error(e)
}
