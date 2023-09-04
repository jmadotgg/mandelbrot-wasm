use hsl::HSL;
use rand::Rng;
use rayon::prelude::*;
use wasm_bindgen::prelude::*;

use wasm_bindgen::Clamped;
pub use wasm_bindgen_rayon::init_thread_pool;

type RGBA = [u8; 4];

//#[wasm_bindgen]
//extern "C" {
//    #[wasm_bindgen(js_namespace = console)]
//    pub fn log(msg: &str);
//}

struct MandelbrotGenerator {
    width: u32,
    height: u32,
    scale: f32,
    iterations: u32,
    center_x: f32,
    center_y: f32,
    palette: Box<[RGBA]>,
}

impl MandelbrotGenerator {
    fn new(
        width: u32,
        height: u32,
        scale: f32,
        iterations: u32,
        center_x: f32,
        center_y: f32,
    ) -> Self {
        let mut rng = rand::thread_rng();
        Self {
            width,
            height,
            scale,
            iterations,
            center_x,
            center_y,
            palette: (0..iterations)
                .map(move |_| {
                    let (r, g, b) = HSL {
                        h: rng.gen_range(0.0..360.0),
                        s: 0.5,
                        l: 0.6,
                    }
                    .to_rgb();
                    [r, g, b, 255]
                })
                .collect(),
        }
    }

    fn generate_parallel(&self) -> Vec<u8> {
        (0..self.height)
            .into_par_iter()
            .flat_map_iter(move |row| self.row(row))
            .collect::<Vec<_>>()
    }

    fn generate(&self) -> Vec<u8> {
        (0..self.height)
            .flat_map(move |row| self.row(row))
            .collect::<Vec<_>>()
    }

    fn row(&self, col: u32) -> Vec<u8> {
        (0..self.width)
            .flat_map(move |row| self.get_color(row, col))
            .copied()
            .collect::<Vec<_>>()
    }

    fn get_color(&self, x: u32, y: u32) -> &RGBA {
        let zx = (x as f32 - self.width as f32 / 2.0) / (0.5 * self.scale * self.width as f32)
            + self.center_x;
        let zy = (y as f32 - self.height as f32 / 2.0) / (0.5 * self.scale * self.height as f32)
            + self.center_y;

        let mut zx_temp = zx.clone();
        let mut zy_temp = zy.clone();

        let mut i = 0;
        while i < self.iterations - 1 {
            let x_temp = zx_temp.powi(2) - zy_temp.powi(2) + zx;
            zy_temp = 2.0 * zx_temp * zy_temp + zy;
            zx_temp = x_temp.clone();

            if zx_temp.powi(2) + zy_temp.powi(2) > 4.0 {
                break;
            }

            i += 1;
        }

        &self.palette[i as usize]
    }
}

#[wasm_bindgen]
pub fn mandelbrot_parallel(
    width: u32,
    height: u32,
    scale: f32,
    iterations: u32,
    center_x: f32,
    center_y: f32,
) -> Clamped<Vec<u8>> {
    Clamped(
        MandelbrotGenerator::new(width, height, scale, iterations, center_x, center_y)
            .generate_parallel(),
    )
}

#[wasm_bindgen]
pub fn mandelbrot(
    width: u32,
    height: u32,
    scale: f32,
    iterations: u32,
    center_x: f32,
    center_y: f32,
) -> Clamped<Vec<u8>> {
    Clamped(
        MandelbrotGenerator::new(width, height, scale, iterations, center_x, center_y).generate(),
    )
}
