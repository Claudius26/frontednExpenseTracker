
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './registerUser';
import {LoginForm} from './loginform';
import {Dashboard} from './dashboard';
import { AddExpenseForm } from './addExpenseForm';
import { Expenses } from './expenses';
import { TotalAmountSpent } from './totalamount';

function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/addExpenseForm' element={<AddExpenseForm/>}/>
        <Route path='/expenses' element={<Expenses/>}/>
        <Route path='/totalAmount' element={<TotalAmountSpent/>}/>
      </Routes>

   </Router>
  );
}

export default App;
