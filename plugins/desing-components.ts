import { defineNuxtPlugin } from "#app";
import VSvg from "../components/controls/VSvg/VSvg.vue";
import "virtual:svg-icons-register";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component("v-svg", VSvg);
});
