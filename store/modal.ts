import { defineStore } from "pinia";

export const useModalStore = defineStore({
    id: "Modal",
    state: () => {
        return {
            general: {
                CITY_SELECTION: {
                    open: false,
                }
            }
        }
    },
});
