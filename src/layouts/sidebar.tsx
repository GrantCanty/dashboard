import { FC } from "react";
import "../assets/styles/sidebar.css"

/**
 * @description props for modal
 */
interface Props {
    setShow: (() => void);
}

/**
 * @description component for the sidebar
 */
const Sidebar: FC<Props > = ({setShow}: Props) => {

    return(
            <div className="sidebar">
                <div className="edit active" onClick={ () => setShow()}>
                    +
                </div>
            </div>
    )
}

export default Sidebar;