import { defineNuxtPlugin } from "#app";

import createApi from "~/api/api";

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();
    const apiEndpoints = {
        geo: config.GEO_API,
    };
    const api = createApi(apiEndpoints);
    nuxtApp.provide("api", api);
});
