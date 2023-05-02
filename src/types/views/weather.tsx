import View from "./view"
import Region from "../regions"

/**
 * @description view for weather
 */
class WeatherView extends View {
    /**
     * @description Variables for class
     * Region contains all the locations to get weather from
     */
    locations: Region[] = new Array()

    /**
     * @description class constructor
     * @param {number} x set x position in CSS
     * @param {number} y set x position in CSS
     * @param {number} w set width in CSS
     * @param {number} l set length in CSS
     */
    constructor(x: number, y: number, w: number, l: number) {
        super(x, y, w, l)
        this.title = "Weather"
    }

    /**
     * @description function to add region to array
     * @param {Region} r region to be added to array 
     */
    add(r: Region) {
        this.locations.push(r)
    }
}

export default WeatherView;