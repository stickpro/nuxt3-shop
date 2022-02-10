import { defineStore } from "pinia";

interface GeoState {}

export const useGeoStore = defineStore({
    id: "geo",
    state: (): GeoState => ({}),
    actions: {
        async loadGeoData(ip) {
            const data = await this.$nuxt.$api.geo.getGeolocation(ip);

            console.log(this.$nuxt);
        },
    },
});
