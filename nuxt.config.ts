import { defineNuxtConfig } from "nuxt3";
import { resolve } from "path";
import viteSvgIcons from "vite-plugin-svg-icons";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    build: {
        postcss: {
            postcssOptions: require("./postcss.config.js"),
        },
    },
    vite: {
        plugins: [
            viteSvgIcons({
                // Specify the icon folder to be cached

                iconDirs: [resolve(__dirname, "./assets/images/sprites")],
                // Specify symbolId format
                symbolId: "icon-[dir]-[name]",
            }),
        ],
    },
    buildModules: ["@intlify/nuxt3"],

    intlify: {
        localeDir: "locales", // set the `locales` directory at source directory of your Nuxt application
        vueI18n: {
            locale: "ru",
        },
    },
});
