import { calculateMandelbrot } from "./javascript.js";
const mainWorker = new Worker(new URL("worker.js", import.meta.url), { type: "module" });
//const mainWorker = new Worker("./worker.js", { type: "module" });
const renderInfo = document.getElementById("renderInfo");
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

function initMandelbrot() {
	renderInfo.hidden = true;
	width = widthInput.value = canvas.width = +widthInput.value !== 0 ? +widthInput.value : window.innerWidth;
	height = heightInput.value = canvas.height = +heightInput.value !== 0 ? +heightInput.value : window.innerHeight;
	iterations = iterationsInput.value = +iterationsInput.value !== 0 ? +iterationsInput.value : 100;
	scale = scaleInput.value = +scaleInput.value !== 0 ? +scaleInput.value : 1;
	centerX = +centerXInput.value;
	centerY = +centerYInput.value;

	timeStart = performance.now()
	switch (renderStrategyInput.value) {
		case "j": paintImage(calculateMandelbrot(width, height, scale, iterations, centerX, centerY)); break;
		case "jp": paintImage(calculateMandelbrot(width, height, scale, iterations, centerX, centerY)); break;
		case "w": mainWorker.postMessage([width, height, scale, iterations, centerX, centerY, 'w']); break;
		case "ws": mainWorker.postMessage([width, height, scale, iterations, centerX, centerY, 'ws']); break;
		case "wp": mainWorker.postMessage([width, height, scale, iterations, centerX, centerY, 'wp']); break;
	}
}

mainWorker.onmessage = (message) => {
	//requestAnimationFrame(() => paintImage(message.data))
	paintImage(message.data);
}

function paintImage(uint8ClampedArray) {
	const imageData = new ImageData(uint8ClampedArray, width, height);
	time.textContent = `${performance.now() - timeStart} ms`;
	ctx.putImageData(imageData, 0, 0);
}

function zoomMandelbrot(event) {
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

	initMandelbrot(true);
}

//let mouseDown = false;
//let startPosX = 0;
//let startPosY = 0;
canvas.addEventListener("wheel", zoomMandelbrot);
//canvas.addEventListener("mousemove", (event) => {
//	const xDf = event.screenX - startPosX;
//	const yDf = event.screenY - startPosY;
//	if (mouseDown && (Math.abs(xDf) > 20 || Math.abs(yDf) > 20)) {
//		centerX += 20;
//		centerY += 20;
//		startPosX = event.screenX;
//		startPosY = event.screenY;
//		initMandelbrot();
//	}
//})
//canvas.addEventListener("mousedown", (event) => {
//	startPosX = event.screenX;
//	startPosY = event.screenY;
//	mouseDown = true;
//})
//canvas.addEventListener("mouseup", (_) => {
//	mouseDown = false;
//})
