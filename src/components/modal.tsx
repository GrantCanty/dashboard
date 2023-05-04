import { FC } from "react";
import ReactDOM from "react-dom";
import "../assets/styles/modal.css"

interface Props {
    show: boolean;
    toggle: () => void;
}

const Modal: FC<Props> =({show, toggle}: Props) => {

    console.log("show: ", show)

    if(!show) {
        return null
    }

    return ReactDOM.createPortal(
        <div className="modal-bg">
            <div className="modal">

            </div>
        </div>,
        document.body
    )
}

export default Modal;