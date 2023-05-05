import React, { FC } from "react";
import ReactDOM from "react-dom";
import "../assets/styles/modal.css"
import View from "../types/views/view";

interface Props {
    show: boolean;
    toggleShow: () => void;
    views: View[]
}

/**
 * @description modal component
 * @param {Props} Props takes props for modal state and state mutator
 */
const Modal: FC<Props> =({show, toggleShow}: Props) => {
    const [viewsState, setViewsState] = React.useState(Array)


    if(!show) {
        return null
    }

    return ReactDOM.createPortal(
        <div className="modal-bg" onClick={() => toggleShow()}>
            <div className="modal">
                <div className="modal-title">
                    <h2>Edit Layout</h2>
                </div>
                <div className="modal-body">

                </div>
            </div>
        </div>,
        document.body
    )
}

export default Modal;