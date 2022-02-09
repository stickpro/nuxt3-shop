

export function getGeolocation() {
    console.log(this.$config)
    const data = fetch(this.GEO_API + '/batch', {
        method: 'POST',
        body: JSON.stringify(
            [{"query": "208.80.152.201", "fields": "city,country,countryCode,query", "lang": "ru"}],
        )
    })    
    return data
}