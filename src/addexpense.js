import {api} from './api.js';

export async function addExpense(expense){
  try{
    const response = await fetch(`${api()}/addexpense`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(expense)
    })
    const data = await response.json();
    if(data.success){
      return {
        success: true,
        message: "Expense added successfully"
      }
    }
    else{
      return{
        success: false,
        message: data.data
        
      }
      
    }
}catch(error){
  return {
    success: false,
    message: "failed to add expense"
  }
  
}
  
}