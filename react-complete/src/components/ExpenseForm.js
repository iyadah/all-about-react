import { Children, useState } from "react";
import Expenses from "./Expenses";
import ExpenseItem from "./ExpenseItem";

const ExpenseForm = props => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [expenses, setExpensesDate] = useState(props.expenses);

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);

    }

    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

       // props.expenses.push(expenseData);
        setExpensesDate([...expenses, expenseData]);
        // setEnteredDate('');
        // setEnteredTitle('');
        // setEnteredAmount('');
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div><input type="text" placeholder="title" value={enteredTitle} onChange={titleChangeHandler} /></div>
                <div><input type="text" placeholder="Amount" value={enteredAmount} onChange={amountChangeHandler} /></div>
                <div><input type="date" value={enteredDate} onChange={dateChangeHandler}/></div><br />
                <button type="submit">Submit</button>
            </form>

            {expenses ? expenses.map(expense=><ExpenseItem expense={expense}/>): expenses.map(expense=><ExpenseItem expense={expense}/>) }

        </div>
    )
}


export default ExpenseForm
