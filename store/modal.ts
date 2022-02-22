import { defineStore } from "pinia";

export const useModalStore = defineStore({
    id: "Modal",
    state: () => {
        return {
            general: {
                CITY_SELECTION: {
                    open: false,
                },
            },
        };
    },
    getters: {
        getCurrentModal: (state) => {
            return (category, name) => state[category][name];
        },
    },
    actions: {
        changeModal(payload) {
            this.general.CITY_SELECTION.open = payload.state;
        },
    },
});
