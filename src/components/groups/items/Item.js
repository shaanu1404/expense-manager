import React from "react";

export const Item = (props) => (
    <div className="item">
        <h3 className="item-name">{props.item}</h3>
        <h5 className="item-qty">Qty: {props.qty}</h5>
        <h5 className="item-amount">₹ {props.amount}</h5>
        <button onClick={props.delete}>Delete</button>
    </div>
);
