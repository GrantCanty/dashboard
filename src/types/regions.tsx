/**
 * @description Region class for WeatherView component
 */
class Region {
    /**
     * @description variables for Region class
     * name of location
     * longitude of location
     * latitude of location
     */
    name: string
    longitude: number
    latitude: number

    /**
     * @description class constructor
     * @param n set name
     * @param lon set longitude
     * @param lat set latitude
     */
    constructor(n: string, lon: number, lat: number) {
        this.name = n
        this.longitude = lon
        this.latitude = lat
    }
}

export default Region;