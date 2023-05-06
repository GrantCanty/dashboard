import { FC } from "react";
import ViewProps from "../types/views/viewInterface";
import "../assets/styles/view.css"
import View from "../types/views/view";

/**
 * @description view component
 * @param {string} title variable for title of the component
 */
const ViewElement: FC<ViewProps> = ({ view }: ViewProps): JSX.Element => {
    let classes: string = createClasses(view)

    return(
        <div className={classes} >
            <div className="view-header">

            </div>
            <div className="view-title">
                {view.title ? <h2>{view.title}</h2> : null}
            </div>
            <div className="view-main">

            </div>
        </div>
    )
}

/**
 * @description returns the start and end x and y positions as a string
 * @param {View} view takes view parameter for finding start and end x and y positions
 * @returns string
 */
function createClasses(view: View): string {
    return `view start-x${view.currentPos[0]} end-x${view.currentPos[0] + view.size[0]} start-y${view.currentPos[1]} end-y${view.currentPos[1] + view.size[1]} }`
}

export default ViewElement;