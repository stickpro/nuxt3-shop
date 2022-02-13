export default (GEO_API) => ({
    async getGeolocation() {
        try {
            const response = await fetch(GEO_API + "/json?lang=ru");
            const json = await response.json();
            return json;
        } catch (error) {
            console.error("Ошибка:", error);
        }
    },
});
