import { defineNuxtPlugin } from "#app";
import { Vue3Mq, useMq } from "vue3-mq";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Vue3Mq, {
        breakpoints: {
            phone: 0,
            mobileSm: 320,
            mobile: 480,
            mobileLg: 640,
            tablet: 768,
            tabletLg: 1024,
            desktop: 1280,
            desktopLg: 1600,
            desktopXl: 1920,
        },
    });
});
