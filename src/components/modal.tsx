import { FC } from "react";
import ReactDOM from "react-dom";
import "../assets/styles/modal.css"

interface Props {
    show: boolean;
    toggle: () => void;
}

/**
 * @description modal component
 * @param {Props} Props takes props for modal state and state mutator
 */
const Modal: FC<Props> =({show, toggle}: Props) => {

    if(!show) {
        return null
    }

    return ReactDOM.createPortal(
        <div className="modal-bg">
            <div className="modal">
                <h2>Testinggggg</h2>
            </div>
        </div>,
        document.body
    )
}

export default Modal;