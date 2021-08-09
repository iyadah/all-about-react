import React from 'react'
import PropTypes from 'prop-types'

const ExpenseDate = props => {
    return (
        <div>
        {Intl.DateTimeFormat('en-US', {year: '2-digit', month:'2-digit', day:'2-digit'}).format(props.date) }

        </div>
    )
}

ExpenseDate.propTypes = {

}

export default ExpenseDate
