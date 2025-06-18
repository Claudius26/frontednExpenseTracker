import {api} from './api'

export async function amountSpent(){
  const userEmail = localStorage.getItem('userEmail');
  try{
    const response = await fetch(`${api()}/calculateAllExpenses?userEmail=${userEmail}`, {
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