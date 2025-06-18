import {api} from './api.js';

function getUserEmail(){
  return localStorage.getItem('userEmail');
}

export async function viewExpenses(){
  const userEmail = getUserEmail()

  try{

  const response = await fetch
  (`${api()}/viewAllExpenses?userEmail=${userEmail}`,
    {
      method: 'GET',
    })
  const data = await response.json();
  if(data.success){
    return {
      success: true,
      data: data.data
    }
  }  
  else{
      return {
      success: false,
      message: data.data
    }
  }
 
  }catch(error){
    return {
      success: false,
      message: 'Failed to get items'
    }
  }

}