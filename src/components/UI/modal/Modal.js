import React from "react";

export const Modal = (props) => {
    return (
        props.show ?
            <div className="backdrop">
                <div className="modal">
                    <h1 className="modal__heading">{props.title}</h1>
                    <div className="modal__content">
                        {props.children}
                    </div>
                    <div className="modal__controls">
                        <button className="modal__control--cancel" onClick={props.close}>Cancel</button>
                        <button className="modal__control--ok" onClick={props.ok}>Ok</button>
                    </div>
                </div>
            </div>
            : null
    );
};
