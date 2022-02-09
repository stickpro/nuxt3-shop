import { getGeolocation } from "@/api/geolocation";
import { defineStore } from "pinia";

interface GeoState {}

export const useGeoStore = defineStore({
  id: "geo",
  state: (): GeoState => ({}),
  actions: {
      async loadGeoData() {
          const data  = await getGeolocation();
          console.log(data);
      }
  }
});
