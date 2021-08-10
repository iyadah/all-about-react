import ExpenseItem from './ExpenseItem'
import { useState } from 'react';
import ExpenseForm from './ExpenseForm';


const Expenses = props => {
    const expenses = props.expenses;
    const [newExpenses , updateExpenses] = useState();
    console.log(newExpenses);      



    const submitExpensesHandler = (expensesData) => {
      const enteredExpenses = {
        ...expensesData,
        id: Math.random()
      }
      expenses.push(enteredExpenses);
      updateExpenses((prevExpenses) => {
          return [enteredExpenses, ...prevExpenses]
      } );
    }
 
    return (
        <div>
           <ExpenseForm onSubmitExpesnes={submitExpensesHandler} />

           {newExpenses ? newExpenses.map(expense=><ExpenseItem expense={expense} key={expense.id}/>): expenses.map(expense=><ExpenseItem expense={expense} key={expense.id}/>) }

        </div>
    )
}



export default Expenses
