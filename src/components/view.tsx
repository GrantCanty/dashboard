import { FC } from "react";
import ViewProps from "../types/views/viewInterface";
import "../assets/styles/view.css"

/**
 * @description view component
 * @param {string} title variable for title of the component
 */
const View: FC<ViewProps> = ({ view }): JSX.Element => {
    let classes: string = `view start-x${view.startPos[0]} end-x${view.startPos[0] + view.size[0]} start-y${view.startPos[1]} end-y${view.startPos[1] + view.size[1]} }`

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

export default View;