/** 
 * Class acts as base of views
 */
class Component {
    /**
     * @description variables for Component Class
     * size contains width and height in CSS
     * title is the header in the component
     */
    size: [number, number]
    title: string

    /**
     * @description class constructor
     * @param w set width in CSS
     * @param h set height in CSS
     * title is set to empty
     */
    constructor(w: number, h: number) {
        this.size = [w, h]
        this.title = ""
    }

    /**
     * @description function to set new size in CSS
     * @param w sets new width in CSS
     * @param h sets new height in CSS
     */
    setSize(w: number, h: number) {
        this.size = [w, h]
    }

    /**
     * @description function to set new width in CSS
     * @param w sets new width in CSS
     */
    setWidth(w: number) {
        this.size = [w, this.size[1]]
    }

    /**
     * @description function to set new height in CSS
     * @param h sets new height in CSS
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

class WeatherView extends Component {

}

class SportsView extends Component {

}

class FinanceView extends Component {

}

class NewsView extends Component {

}

class CalendarView extends Component {

}