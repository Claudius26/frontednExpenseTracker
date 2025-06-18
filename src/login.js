import {api} from './api.js';

export async function login(formData){
  try{
    const response = await fetch(`${api()}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success || data.data === 'User is already logged in') {
        localStorage.setItem('userEmail',formData.email);
        return {success: true, data: data};
      } 
      else {
           return {success: false, message: data.data};
      }
  }catch(error){
    return {success:false, message: "An error occured please try again."}
  }
}