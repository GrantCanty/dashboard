import { FC, useEffect } from "react";
import Home from "../pages/home";
import "../assets/styles/main.css"
import View from "../types/views/view";

interface Props {
    views: View[]
    push: (v: View) => void
}

/**
 * @description component for the main view area
 */
const Main: FC<Props> = ({views, push}: Props) => {

    return(
        <div className="main">
            <Home c={views} push={push} />
        </div>
    )
}

export default Main;