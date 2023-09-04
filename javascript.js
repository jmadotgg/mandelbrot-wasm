"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateMandelbrot = void 0;
var chroma = require("chroma-js");
var MandelbrotGenerator = /** @class */ (function () {
    function MandelbrotGenerator(width, height, scale, iterations, centerX, centerY) {
        this.width = width;
        this.height = height;
        this.scale = scale;
        this.iterations = iterations;
        this.centerX = centerX;
        this.centerY = centerY;
        this.palette = Array.from({ length: iterations }, function () {
            var _a = chroma(Math.random() * 360, 0.5, 0.6, 'hsl').rgb(), r = _a[0], g = _a[1], b = _a[2];
            return [r, g, b, 255];
        });
    }
    MandelbrotGenerator.prototype.generate = function () {
        var mandelbrot = new Uint8ClampedArray(this.width * this.height * 4);
        var pixel;
        for (var row = 0; row < this.height; row++) {
            for (var col = 0; col < this.width; col++) {
                pixel = row * this.width * 4 + col * 4;
                var _a = this.getColor(col, row), r = _a[0], g = _a[1], b = _a[2], a = _a[3];
                mandelbrot[pixel] = r;
                mandelbrot[pixel + 1] = g;
                mandelbrot[pixel + 2] = b;
                mandelbrot[pixel + 3] = a;
            }
        }
        return mandelbrot;
    };
    MandelbrotGenerator.prototype.getColor = function (x, y) {
        var zx = (x - this.width / 2) / (0.5 * this.scale * this.width) + this.centerX;
        var zy = (y - this.height / 2) / (0.5 * this.scale * this.height) + this.centerY;
        var zx_temp = zx;
        var zy_temp = zy;
        var i = 0;
        while (i < this.iterations - 1) {
            var x_temp = Math.pow(zx_temp, 2) - Math.pow(zy_temp, 2) + zx;
            zy_temp = 2 * zx_temp * zy_temp + zy;
            zx_temp = x_temp;
            if (Math.pow(zx_temp, 2) + Math.pow(zy_temp, 2) > 4) {
                break;
            }
            i++;
        }
        return this.palette[i];
    };
    return MandelbrotGenerator;
}());
function calculateMandelbrot(width, height, scale, iterations, centerX, centerY) {
    return new MandelbrotGenerator(width, height, scale, iterations, centerX, centerY).generate();
}
exports.calculateMandelbrot = calculateMandelbrot;
