import { useNavigate } from 'react-router-dom';
import { logOutUser } from './logOutFunction';
import { useState } from 'react';


export  function Logout(){
  const navigate = useNavigate();
  const [error, setError] = useState('');

  async function handleLogout() {
    setError('');

    const result = await logOutUser();
    if(result.success){
      localStorage.removeItem('userEmail');
      navigate('/login');
    }
    else{
      setError(result.message);
      alert(error)
    }
  }

 return (
    <div className='logOut'>
      <button onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
}

