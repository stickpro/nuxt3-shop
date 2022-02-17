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
    isCityConfirmationOpen: boolean;
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
        isCityConfirmationOpen: true,
    }),
    actions: {
        async loadGeoData() {
            const data = await this.$api.geo.getGeolocation();
            this.ip = data.query;
            this.city = data.city;
            this.country = data.country;
            this.countryCode = data.countryCode;
            this.regionName = data.regionName;
            this.regionCode = data.regionCode;
            this.timezone = data.timezone;
            this.zip = data.zip;
        },
    },
});
