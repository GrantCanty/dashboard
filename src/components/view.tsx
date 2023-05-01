import { FC } from "react";
import ViewProps from "../types/views/viewInterface";

/**
 * @description view component
 * @param {string} title variable for title of the component
 */
const View: FC<ViewProps> = ({ view }): JSX.Element => {
    
    return(
        <div className="view" >
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