import { FC } from "react";
import Home from "../pages/home";
import "../assets/styles/main.css"
import View from "../types/views/view";

interface Props {
    views: Map<string, View>
    setViews: (m: Map<string, View>) => void
}

/**
 * @description component for the main view area
 */
const Main: FC<Props> = ({views, setViews}: Props) => {

    return(
        <div className="main">
            <Home views={views} setViews={setViews} />
        </div>
    )
}

export default Main;