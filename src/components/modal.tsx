import { FC } from "react";
import ReactDOM from "react-dom";
import "../assets/styles/modal.css"

interface Props {
    showModal: boolean;
    setShow: (value: boolean) => void;
}

const Modal: FC<Props> =({showModal, setShow}: Props) => {

    if(!showModal) {
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