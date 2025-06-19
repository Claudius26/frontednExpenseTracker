import {Link} from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addExpense } from './addexpense';
import { getUserEmail } from './userEmail';

export function AddExpenseForm(){
  const [expense, setExpense] = useState(
    {
      description: '', 
      amount: '',
      date: ''
    });

    const navigate = useNavigate();
    
    const handleChange = (event) =>{
      setExpense({
        ...expense,
        [event.target.id]: event.target.value
      })
    }

    const handleSubmit = async(event) =>{
      event.preventDefault();
      const userEmail = getUserEmail()

      const expenseRequest = {
        ...expense,
        userEmail
      };
      try {
        const response = await addExpense(expenseRequest);
        if(response.success){
          alert(response.message);
          navigate('/dashboard')
        }
        else{
          alert(response.message);
          navigate('/dashboard')
        }
        
      }
      catch(error){
        return error;
      }
    }
    
  
  return(
   <div className='addExpenseForm'>
    <h1 className='addOnExpense'>Add Expense</h1>
    <form onSubmit={handleSubmit} className='formElement'>
      <div>
        <label htmlFor="description">Description</label>
        <input type="text" id="description" placeholder="Enter expense description" value={expense.description}
        onChange={handleChange} required/>
      </div>

      <div>
        <label htmlFor="amount">Amount</label>
        <input type="text" id="amount" placeholder="Enter expense amount" value={expense.amount}
        onChange={handleChange} required/>
      </div>

      <div>
        <label htmlFor="date">Date</label>
        <input type="date" id="date" value={expense.date}
        onChange={handleChange} required/>
      </div>

      <div className='addExpenseDiv'>
        <p><Link to="/dashboard">Cancel <span>&#10006;</span></Link></p>
         <button type="submit">Add expense</button>  
      </div>
     
    </form>
   </div>
  );
}