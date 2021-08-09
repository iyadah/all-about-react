import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import { useState } from 'react';
const ExpenseItem = ({expense}) => {
    const [title, setTitle] = useState(expense.title);

    const clickHandler = () => {
        setTitle(title + " updated");
    }
    return (
        <div className="expense-item">
            <ExpenseDate date={expense.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{expense.amount}</div>
                <button onClick={clickHandler}>Submit</button>
            </div>
        </div>
    )
};


export default ExpenseItem;
