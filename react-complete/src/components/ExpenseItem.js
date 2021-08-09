import React from 'react'
import './ExpenseItem.css'
const ExpenseItem = props => {
    return (
        <div className="expense-item">
            <div className="expense-item__description">March 28th 2021</div>
            <div>
                <h2>Car insurance</h2>
                <div className="expense-item__price">289.6</div>
            </div>
        </div>
    )
};


export default ExpenseItem;
