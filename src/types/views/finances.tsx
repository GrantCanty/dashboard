import View from "./view"

/**
 * @description view for finances
 */
class FinanceView extends View {
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

export default FinanceView;