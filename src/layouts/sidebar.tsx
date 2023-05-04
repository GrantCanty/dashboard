import { FC } from "react";
import "../assets/styles/sidebar.css"



/**
 * @description component for the sidebar
 */

interface Props {
    show: boolean | (() => void);
    setShow: boolean | (() => void);
}

const Sidebar: FC<Props > = ({show, setShow}) => {

    console.log("show: ", show)

    return(
            <div className="sidebar">
                <div className="edit active" onClick={ () => setShow}>
                    +
                </div>
            </div>
    )
}

export default Sidebar;