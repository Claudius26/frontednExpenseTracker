import {Logout} from './logout';
import {Link} from 'react-router-dom'

export function Dashboard(){
  return(
    <>
    <div className="expenseContainer">
        <div>
        <h1>Expense Tracker</h1>
      </div>
      <div>
          <p><Link to='/addExpenseForm'>&#x2795; Add Expense</Link></p>
          <p><Link to="/expenses">&#128065; View All Expense </Link></p>
          <p><Link to="/totalAmount">&#128176; Amount Spent</Link></p>
      </div>
       <Logout/>
    </div>

    </>
  )
}