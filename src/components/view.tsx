import { FC } from "react";
import Component from "../types/components";
import ComponentProps from "../types/compInterface";

/**
 * @description view 
 * @param {string} title variable for title of the component
 */
const View: FC<ComponentProps> = ({ component }): JSX.Element => {
    
    return(
        <div className="view" >
            <div className="view-header">

            </div>
            <div className="view-title">
                {component.title ? <h2>{component.title}</h2> : null}
            </div>
            <div className="view-main">

            </div>
        </div>
    )
}

export default View;