import viteImageMin from "vite-plugin-imagemin";

export default {
  plugins: [
    viteImageMin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 40,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
    }),
  ],
};
