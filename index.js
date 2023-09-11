import init, { mandelbrot, mandelbrot_simple } from "./pkg/mandelbrot.js";
import { calculateMandelbrot } from "./javascript.js";

//const wasmMemory = new WebAssembly.Memory({ initial: 18, maximum: 16384, shared: true });
//mainWorker.postMessage({ type: "initMemory", payload: wasmMemory });
//await init(undefined, wasmMemory);

const isBadUserAgent = iOS();
const mainWorker = new Worker(new URL("worker.js", import.meta.url), { type: "module" });

// Safari runs out of memory after too many page reloads, maybe because workers do not get killed
console.debug("Safari runs out of memory after too many page reloads, maybe because workers do not get killed")
if (!isBadUserAgent) {
	await init();
}

const renderInfo = document.getElementById("renderInfo");
const renderInfoContainer = document.getElementById("renderInfoContainer");
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const calcBtn = document.getElementById("calcBtn");
const widthInput = document.getElementById("width");
const heightInput = document.getElementById("height");
const iterationsInput = document.getElementById("iterations");
const time = document.getElementById("time");
const scaleInput = document.getElementById("scale");
const centerXInput = document.getElementById("centerX");
const centerYInput = document.getElementById("centerY");
const renderStrategyInput = document.getElementById("renderStrategy");
const resetScaleBtn = document.getElementById("resetScaleBtn");
const minSizeInfo = document.getElementById("minSizeInfo")

const zoomFactor = 1.5; // Controls how fast we zoom in

let width = (widthInput.value = window.innerWidth);
let height = (heightInput.value = window.innerHeight);
let iterations = (iterationsInput.value = 100);
let centerX = (centerXInput.value = -0.5);
let centerY = (centerYInput.value = 0);
let scale = (scaleInput.value = 1);

let timeStart = 0;

calcBtn.onclick = () => initMandelbrot();
renderInfo.children[0].onclick = () => initMandelbrot();
resetScaleBtn.onclick = () => {
	centerX = (centerXInput.value = -0.5);
	centerY = (centerYInput.value = 0);
	scale = (scaleInput.value = 1);
	initMandelbrot()
}

window.addEventListener("keypress", (event) => {
	if (event.key === "Enter") {
		initMandelbrot();
	}
})

function iOS() {
	return navigator.platfom === 'MacIntel' && navigator.maxTouchPoints > 2;
}

const sendData = isBadUserAgent ? () => {
	if (renderStrategyInput.value === "j") {
		paintImage(calculateMandelbrot(width, height, scale, iterations, centerX, centerY));
		return;
	}
	mainWorker.postMessage([width, height, scale, iterations, centerX, centerY, renderStrategyInput.value])

} : () => {
	switch (renderStrategyInput.value) {
		case "j":
			paintImage(calculateMandelbrot(width, height, scale, iterations, centerX, centerY));
			break;
		case "w":
			paintImage(mandelbrot(width, height, scale, iterations, centerX, centerY));
			break;
		case "ws":
			paintImage(mandelbrot_simple(width, height, scale, iterations, centerX, centerY));
			break;
		case "wp":
			mainWorker.postMessage([width, height, scale, iterations, centerX, centerY]);
			break;
	}
}

let running = false;

function initMandelbrot() {
	if (running) return;
	running = true;
	// Does not work when running on main thread, because render process is blocked I guess.
	calcBtn.disabled = true;
	resetScaleBtn.disabled = true;
	calcBtn.setAttribute("disabled", true)
	renderInfoContainer.remove()
	width = widthInput.value = canvas.width = +widthInput.value !== 0 ? +widthInput.value : window.innerWidth;
	height = heightInput.value = canvas.height = +heightInput.value !== 0 ? +heightInput.value : window.innerHeight;
	iterations = iterationsInput.value = +iterationsInput.value !== 0 ? +iterationsInput.value : 100;
	scale = scaleInput.value = +scaleInput.value !== 0 ? +scaleInput.value : 1;
	centerX = +centerXInput.value;
	centerY = +centerYInput.value;

	timeStart = performance.now()
	sendData()
}

mainWorker.onmessage = (message) => {
	paintImage(message.data);
}

function paintImage(uint8ClampedArray) {
	const imageData = new ImageData(uint8ClampedArray, width, height);
	time.textContent = `${(performance.now() - timeStart).toFixed(0)} ms`;
	ctx.putImageData(imageData, 0, 0);
	running = false
	calcBtn.disabled = false;
	resetScaleBtn.disabled = false;
}

function zoomMandelbrot(event) {
	if (running) return;
	const newScale =
		event.deltaY > 0 ? scale * zoomFactor : scale / zoomFactor;
	const mouseRe =
		(event.clientX - width / 2) / (0.5 * scale * width) + centerX;
	const mouseIm =
		(event.clientY - height / 2) / (0.5 * scale * height) + centerY;
	centerX = centerXInput.value =
		mouseRe - (event.clientX - width / 2) / (0.5 * newScale * width);
	centerY = centerYInput.value =
		mouseIm - (event.clientY - height / 2) / (0.5 * newScale * height);
	scale = scaleInput.value = newScale;

	initMandelbrot();
}

const minSize = 560;

function resize() {
	width = (widthInput.value = window.innerWidth);
	height = (heightInput.value = window.innerHeight);

	if (width < minSize || height < minSize) {
		minSizeInfo.hidden = false;
		minSizeInfo.style.zIndex = "998";
		minSizeInfo.style.visibility = "initial";
	} else {
		minSizeInfo.style.zIndex = "-999";
		minSizeInfo.hidden = true;
		minSizeInfo.style.visibility = "hidden";
	}
}

canvas.addEventListener("wheel", zoomMandelbrot);
window.addEventListener("resize", resize);

resize()


time.textContent = navigator.platform + navigator.userAgent + navigator.maxTouchPoints;
