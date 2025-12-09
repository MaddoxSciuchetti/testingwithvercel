import "./Modal.css"
import {useState} from "react";



export default function Modal({item, toggleModal, completeRemove}) {
    return(
        <>
            <div className="modal">
                <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-content">
                    <h2 className="styling">Mit diser Aktion wird der Mitarbeiter und sein onboarding Fortschritt gelöscht</h2>
                    <button className="close-modal styling" onClick={() => {toggleModal(); completeRemove(item)}}>Löschen</button>
                </div>
            </div>

        </>
    )
}