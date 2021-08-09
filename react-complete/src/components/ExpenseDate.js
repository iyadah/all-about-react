
const ExpenseDate = ({date}) => {
    return (
        <div>
        {Intl.DateTimeFormat('en-US', {year: '2-digit', month:'2-digit', day:'2-digit'}).format(date) }

        </div>
    )
}


export default ExpenseDate
