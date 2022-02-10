import geolocation from "./geolocation";

export default (apiUrl) => ({
    geo: geolocation(apiUrl.geo),
});
