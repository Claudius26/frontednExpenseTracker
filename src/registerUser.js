import Form from './form';
import {Link} from 'react-router-dom'

export default function Register(){
  return (
    <>
      <h1>Create an account</h1>
      <Form/>
       <p>
        Already have an account?
        <Link to="/login"> Sign in here</Link>
      </p>
    </>
  );
}