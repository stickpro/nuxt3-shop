import { defineStore } from "pinia";

export const useAppStore = defineStore({
    id: "App",
    state: () => {
        return {
            scroll: false,
        };
    },
});
