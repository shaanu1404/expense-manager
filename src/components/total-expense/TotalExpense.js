import React from "react";
export const TotalExpense = () => (
    <div className="container">
        <h1 className="section-heading">Total expenses</h1>
        <div className="expense__card">
            <div className="expense__card--content">
                <h1 className="title">Total Amount</h1>
                <span className="amount">$100</span>
            </div>
            <div className="expense__card--profit">
                <h1 className="title">Profit</h1>
                <span className="amount">$10</span>
            </div>
            <div className="expense__card--loss">
                <h1 className="title">Loss</h1>
                <span className="amount">$0</span>
            </div>
        </div>
    </div>
);
