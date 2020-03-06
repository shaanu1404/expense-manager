import React from "react";
import {connect} from 'react-redux';

const mapStateToProps = state => ({groups: state.groups});

export const TotalExpense = connect(mapStateToProps)(
    (props) => {

        const totalAmount = props.groups.reduce((x, y) => x + y.amount, 0);
        const amountArray = [];
        props.groups.map(group =>
            amountArray.push(group.items.reduce((x, y) => x + y.amount, 0))
        );
        let totalSpentAmount = amountArray.reduce((x, y) => x + y, 0);
        let remaining = totalAmount - totalSpentAmount;
        let profit = 0;
        let loss = 0;

        if (remaining >= 0)
            profit = remaining;
        else
            loss = remaining;

        return (
            <div className="container">
                <h1 className="section-heading">Total expenses</h1>
                <div className="expense__card">
                    <div className="expense__card--content">
                        <h1 className="title">Total Amount</h1>
                        <span className="amount">₹ {totalAmount}</span>
                    </div>
                    <div className="expense__card--profit">
                        <h1 className="title">Profit</h1>
                        <span className="amount">₹ {profit}</span>
                    </div>
                    <div className="expense__card--loss">
                        <h1 className="title">Loss</h1>
                        <span className="amount">
                            {loss !== 0 ? '-' : ''} ₹ {Math.abs(loss)}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
);
