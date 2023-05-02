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
     * @param {number} x set x position in CSS
     * @param {number} y set x position in CSS
     * @param {number} w set width in CSS
     * @param {number} l set length in CSS
     */
    constructor(x: number, y: number, w: number, l: number) {
        super(x, y, w, l)
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