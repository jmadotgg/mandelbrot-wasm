import init, { initThreadPool, mandelbrot, mandelbrot_parallel } from "./mandelbrot.js";

await init();
await initThreadPool(navigator.hardwareConcurrency);

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
