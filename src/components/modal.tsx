import { FC } from "react";
import ReactDOM from "react-dom";
import "../assets/styles/modal.css"

const Modal: FC =() => {

    return ReactDOM.createPortal(
        <div className="modal-bg">
            <div className="modal">

            </div>
        </div>,
        document.body
    )
}

export default Modal;