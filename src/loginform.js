import {useState} from 'react';
import {Link} from 'react-router-dom';
import { login } from './login';
import {useNavigate} from 'react-router-dom';

export function LoginForm(){

  const [formData, setFormData] = useState({

    email: '',
    password: '',

  });

  const navigate = useNavigate();

  const handleChange = (e) =>{
    setFormData({...formData, 
      [e.target.id]: e.target.value});
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();
    const response = await login(formData);
    if(response.success){
      navigate('/dashboard');
    }else{
      alert(response.message);
    }

  }


  return (
    <div className='mainContainer'>
      <h1>Sign in</h1>
      <div className='formDiv'>
        <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" placeholder="Enter your email" value={formData.email} onChange={handleChange}/>
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" placeholder="Enter your password" value={formData.password} onChange={handleChange}/>
            </div>
            <div>
              <button type='submit'>Login</button>
            </div>
      </form>
      </div>
      <p>
        Don’t have an account?
        <Link to="/register"> Sign up</Link>
      </p>

    </div>
  );
}