import * as chroma from "chroma-js";

type RGBA = [number, number, number, number];

class MandelbrotGenerator {
	width: number;
	height: number;
	scale: number;
	iterations: number;
	centerX: number;
	centerY: number;
	palette: RGBA[];

	constructor(width: number, height: number, scale: number, iterations: number, centerX: number, centerY: number) {
		this.width = width;
		this.height = height;
		this.scale = scale;
		this.iterations = iterations;
		this.centerX = centerX;
		this.centerY = centerY;
		this.palette = Array.from({ length: iterations }, () => {
			let [r, g, b] = chroma(
				Math.random() * 360 as number,
				0.5,
				0.6,
				'hsl'
			).rgb();


			return [r, g, b, 255];

		});
	}

	generate(): Uint8ClampedArray {
		const mandelbrot = new Uint8ClampedArray(this.width * this.height * 4)
		let pixel: number;
		for (let row = 0; row < this.height; row++) {
			for (let col = 0; col < this.width; col++) {
				pixel = row * this.width * 4 + col * 4;
				let [r, g, b, a] = this.getColor(col, row);
				mandelbrot[pixel] = r;
				mandelbrot[pixel + 1] = g;
				mandelbrot[pixel + 2] = b;
				mandelbrot[pixel + 3] = a;

			}
		}
		return mandelbrot;
	}

	getColor(x: number, y: number): RGBA {
		const zx = (x - this.width / 2) / (0.5 * this.scale * this.width) + this.centerX;
		const zy = (y - this.height / 2) / (0.5 * this.scale * this.height) + this.centerY;

		let zx_temp = zx;
		let zy_temp = zy;

		let i = 0;
		while (i < this.iterations - 1) {
			const x_temp = zx_temp ** 2 - zy_temp ** 2 + zx;
			zy_temp = 2 * zx_temp * zy_temp + zy;
			zx_temp = x_temp;

			if (zx_temp ** 2 + zy_temp ** 2 > 4) {
				break;
			}

			i++;
		}

		if (i === this.iterations - 1) {
			return [0, 0, 0, 255];
		}

		return this.palette[i];
	}
}

function calculateMandelbrot(width: number, height: number, scale: number, iterations: number, centerX: number, centerY: number): Uint8ClampedArray {
	return new MandelbrotGenerator(width, height, scale, iterations, centerX, centerY).generate();
}

export { calculateMandelbrot };
