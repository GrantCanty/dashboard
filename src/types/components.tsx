import Region from "./regions"

/** 
 * @description class acts as base of views
 */
class Component {
    /**
     * @description variables for Component class
     * size contains width and height in CSS
     * title is the header in the component
     */
    size: [number, number]
    title: string

    /**
     * @description class constructor
     * @param {number} w set width in CSS
     * @param {number} h set height in CSS
     */
    constructor(w: number, h: number) {
        this.size = [w, h]
        this.title = ""
    }

    /**
     * @description function to set new size in CSS
     * @param {number} w new width value in CSS
     * @param {number} h new height value in CSS
     */
    setSize(w: number, h: number) {
        this.size = [w, h]
    }

    /**
     * @description function to set new width in CSS
     * @param {number} w  new width value in CSS
     */
    setWidth(w: number) {
        this.size = [w, this.size[1]]
    }

    /**
     * @description function to set new height in CSS
     * @param {number} h new height value in CSS
     */
    setHeight(h: number) {
        this.size = [this.size[0], h]
    }

    /**
     * @description function to reset size to default
     */
    resetSize() {
        this.size = [1, 1]
    }
}

/**
 * @description view for weather
 */
class WeatherView extends Component {
    /**
     * @description Variables for class
     * Region contains all the locations to get weather from
     */
    locations: Region[] = new Array()

    /**
     * @description class constructor
     */
    constructor() {
        super(1, 1)
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
/**
 * @description view for sports scores
 */
class SportsView extends Component {

}
/**
 * @description view for finances
 */
class FinanceView extends Component {
    /**
     * @description variables for class
     * symbols to track performance
     */
    symbols: string[] = new Array()

    /**
     * @description class constructor
     */
    constructor() {
        super(1,1)
        this.title = "Finances"
    }

    /**
     * @description function to add symbol to array
     * @param s symbol to be added to array
     */
    add(s: string) {
        this.symbols.push(s)
    }
}
/**
 * @description view for news
 */
class NewsView extends Component {

}

/**
 * @description view for calendar
 */
class CalendarView extends Component {
    /**
     * @description variables for class
     * date stores today's date
     */
    date = new Date()

    /**
     * @description class constructor
     */
    constructor() {
        super(1, 1)
        this.title = "News"
    }
}

export default Component;