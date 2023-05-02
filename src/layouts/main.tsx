import { FC } from "react";
import Home from "../pages/home";
import "../assets/styles/main.css"

/**
 * @description component for the main view area
 */
const Main: FC = () => {

    return(
        <div className="main">
            <Home />
        </div>
    )
}

export default Main;