import VScrollLock from "v-scroll-lock";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VScrollLock);
});
