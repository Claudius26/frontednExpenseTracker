import {api} from './api.js';
import { getUserEmail } from './userEmail.js';

export async function logOutUser(){
  const userEmail = getUserEmail();
  try{
    const response = await fetch(`${api()}/logOut`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
         currentUserEmail: userEmail
        })
        })
        const data = await response.json();
        console.log(userEmail)
        if(!data.success){
          return{data: data.data,
            success: false}
          }
          else{
            return {
              data:data.data,
              success: true}
            }
            
  }catch(error){
    return {
      data:"Error occured..",
      success: false}
  }
}