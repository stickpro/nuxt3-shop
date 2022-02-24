import { defineStore } from "pinia";

export const useSearchStore = defineStore({
    id: "Search",
    state: () => {
        return {
            search: false,
        };
    },
});
