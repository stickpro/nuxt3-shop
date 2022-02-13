import { defineStore } from "pinia";

interface GeoLocationState {
    ip: string;
    city: string;
    country: string;
    countryCode: string;
    regionName: string;
    regionCode: string;
    timezone: string;
    zip: string;
}
export const useGeoStore = defineStore({
    id: "geo",
    state: (): GeoLocationState => ({
        ip: "",
        city: "",
        country: "",
        countryCode: "",
        regionName: "",
        regionCode: "",
        timezone: "",
        zip: "",
    }),
    actions: {
        async loadGeoData() {
            const data = await this.$api.geo.getGeolocation();
            console.log(data);
        },
    },
});
