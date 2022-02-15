import { defineNuxtPlugin } from "#app";
import VSvg from "../components/controls/VSvg/VSvg.vue";
import VButton from "../components/controls/VButton/VButton.vue";
import VLink from "../components/controls/VLink/VLink.vue";
import "virtual:svg-icons-register";

// Global register component
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component("v-svg", VSvg);
    nuxtApp.vueApp.component("v-button", VButton);
    nuxtApp.vueApp.component("v-link", VLink);
});
