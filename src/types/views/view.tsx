/** 
 * @description class acts as base of views
 */
class View {
    /**
     * @description variables for View class
     * size contains width and height in CSS
     * title is the header in the View
     */
    startPos: [number, number]
    newPos: [number, number]
    size: [number, number]
    title: string

    /**
     * @description class constructor
     * @param {number} x set x position in CSS
     * @param {number} y set x position in CSS
     * @param {number} w set width in CSS
     * @param {number} l set length in CSS
     */
    constructor(x: number, y: number, w: number, l: number) {
        this.startPos = [x, y]
        this.newPos = this.startPos
        this.size = [w, l]
        this.title = ""
    }

    setNewPos(x: number, y: number) {
        this.newPos= [x, y]
    }

    setX(x: number) {
        this.newPos = [x, this.startPos[1]]
    }

    setY(y: number) {
        this.newPos = [this.startPos[0], y]
    }

    resetPos() {
        this.newPos = this.startPos
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
    setLength(l: number) {
        this.size = [this.size[0], l]
    }

    /**
     * @description function to reset size to default
     */
    resetSize() {
        this.size = [1, 1]
    }

    reset() {
        this.resetPos()
        this.resetSize()
    }
}

export default View;