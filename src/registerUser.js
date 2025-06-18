import Form from './form';
import {Link} from 'react-router-dom'

export default function Register(){
  return (
    <div className='mainContainer'>
      <h1 className='createAccount'>Create an account</h1>
      <Form/>
      <div className='loginPage'>
        <p>
        Already have an account?
        <Link to="/login"> Sign in here</Link>
      </p>
      </div>
    </div>
  );
}