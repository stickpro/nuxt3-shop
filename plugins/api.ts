import { defineNuxtPlugin } from "#app";
import createApi from "~/api/api";

export default defineNuxtPlugin(({ $pinia }) => {
    const config = useRuntimeConfig();
    const apiEndpoints = {
        geo: config.GEO_API,
    };
    const api = createApi(apiEndpoints);
    $pinia.use(() => ({ $api: api }));
});
