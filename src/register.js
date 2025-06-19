
import {api} from './api.js';

export async function registerUser(formData){
  try{
    const response = await fetch(`${api()}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    });
    const data = await response.json();
    
    if(data.success){
      localStorage.setItem('user', JSON.stringify(data));
      return {
        success: true,
         message: 'Registration successful'};

    }
    else{
      return { 
        success: false, 
        message: data.data};
    }
  }catch(error){
    return { success: false, message: 'An error occurred while registering, try again' };
  }
  
}
