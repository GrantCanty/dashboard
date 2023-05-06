import React, { FC } from "react";
import ReactDOM from "react-dom";
import "../assets/styles/modal.css"
import View from "../types/views/view";
import FormComp from "./formComp";
import ModalForm from "./modalForm";

/**
 * @description props interface for modal component 
 * @param {boolean} show shows modal if true
 * @param {() => void} toggleShow toggles show as true or false
 * @param {View[]} views array that contains views
 */
interface Props {
    show: boolean;
    toggleShow: () => void;
    views: Map<string, View>
}

/**
 * @description modal component
 * @param {Props} Props takes props for modal state and state mutator
 */
const Modal: FC<Props> =({show, toggleShow, views}: Props) => {

    const handleChildClick = (e: React.FormEvent) => {
        e.stopPropagation()
    }

    if(!show) {
        return null
    }

    return ReactDOM.createPortal(
        <div className="modal-bg" onClick={() => toggleShow()}>
            <div className="modal" onClick={(e) => handleChildClick(e)}>
                <div className="modal-title">
                    <h2>Edit Layout</h2>
                </div>
                <div className="modal-body">
                    <ModalForm views={views} />
                </div>
            </div>
        </div>,
        document.body
    )
}

export default Modal;