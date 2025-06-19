import {api} from './api'
import { getUserEmail } from './userEmail';

export async function amountSpent(){
  const email = getUserEmail()
  try{
    const response = await fetch(`${api()}/calculateAllExpenses?userEmail=${email}`, {
      method : 'GET',
    })
    const data = await response.json();
    if(data.success){
      return {
        data :data.data,
        success:true
      }
    }
    else{
      return{
        data : data.data,
        success : false
      }
    }
  }catch(error){
    return{
      data : "Error occured while fetching amount",
      success : false
    }
  }
}