import React from 'react'
import ExpenseItem from './ExpenseItem'
import PropTypes from 'prop-types'

const Expenses = props => {
    const expenses = [
        {id: 1, title: "Car insurance", amount: 223.3, date: new Date(2001, 2, 28)},
        {id: 2, title: "Groceries for office", amount: 33.7, date: new Date(2021, 4, 3)},
        {id: 3, title: "Entertainment for the kids", amount: 100.73, date: new Date(2021, 2, 21)}
    
      ]
    return (
        <div>
           {expenses.map(expense=><ExpenseItem expense={expense} />)}

        </div>
    )
}

Expenses.propTypes = {

}

export default Expenses
