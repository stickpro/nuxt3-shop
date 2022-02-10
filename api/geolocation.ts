export default (GEO_API) => ({
    async getGeolocation(ip) {
        try {
            const response = await fetch(GEO_API + "/batch", {
                method: "POST",
                body: JSON.stringify([
                    {
                        query: "208.80.152.201",
                        fields: "city,country,countryCode,query",
                        lang: "ru",
                    },
                ]),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const json = await response.json();
            return json[0];
        } catch (error) {
            console.error("Ошибка:", error);
        }
    },
});
