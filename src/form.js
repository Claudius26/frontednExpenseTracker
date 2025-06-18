import {useState} from 'react';
import { registerUser } from './register';
import { useNavigate } from 'react-router-dom';

export default function Form(){

  const [formData, setFormData] = useState(
    {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      address: '',
      password: ''
    }
  );

  const navigate = useNavigate();

  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.id] : e.target.value
    });
  };

  const handleSubmit = async(e) =>{
    
    e.preventDefault();
   const response =  await registerUser(formData);
   if(response.success){
    alert(response.message);
    navigate('/dashboard')
   }else{
    alert(response.message);
   }
    
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">Firstname:</label>
          <input type="text" id="firstName" placeholder="Enter your first firstname" value={formData.firstName} onChange={handleChange} required/>
        </div>

        <div>
          <label htmlFor="lastName">lastname:</label>
          <input type="text" id="lastName" placeholder="Enter your first lastName" value={formData.lastName} onChange={handleChange} required/>
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required/>
        </div>

        <div>
          <label htmlFor="phoneNumber">PhoneNumber:</label>
          <input type="text" id="phoneNumber" placeholder="Enter your Phonenumber" value={formData.phoneNumber} onChange={handleChange} required/>
        </div>

        <div>
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" placeholder="Enter your residence" value={formData.address} onChange={handleChange} required/>
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} required/>
        </div>

        <p>By continuing, you agree to our 
          <a href="#"> terms of service.</a></p>
        <button type='submit'>Sign up</button>

      </form>
    </>
  )
}