import View from "./view";

/**
 * @description view for calendar
 */
class CalendarView extends View {
    /**
     * @description variables for class
     * date stores today's date
     */
    date = new Date()

    /**
     * @description class constructor
     * @param {number} x set x position in CSS
     * @param {number} y set x position in CSS
     * @param {number} w set width in CSS
     * @param {number} l set length in CSS
     */
    constructor(x: number, y: number, w: number, l: number) {
        super(x, y, w, l)
        this.title = "News"
    }
}

export default CalendarView;