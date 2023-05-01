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
     */
    constructor() {
        super(1, 1)
        this.title = "News"
    }
}

export default CalendarView;