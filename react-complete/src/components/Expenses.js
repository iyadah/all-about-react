import ExpenseItem from './ExpenseItem'


const Expenses = props => {
    const expenses = props.expenses; 
    console.log(expenses)
    return (
        <div>

           {expenses ? expenses.map(expense=><ExpenseItem expense={expense} key={expense.id}/>): expenses.map(expense=><ExpenseItem expense={expense} key={expense.id}/>) }

        </div>
    )
}



export default Expenses
