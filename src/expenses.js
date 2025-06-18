import { useEffect } from "react";
import { viewExpenses } from "./viewExpenses"
import { Link } from "react-router-dom";
import {useState} from "react";

export  function Expenses(){ 
  const [expenses, setExpenses] = useState([]);
  const [error, seterror] = useState('');
  const [loading, setloading] = useState(true);

  useEffect(()=>{
    async function fetchData(){
        const data = await viewExpenses();
        if(data.success){
          setExpenses(data.data);
        }else{
          seterror(data.message)
        }
        setloading(false);
    }
    //my commit
    fetchData();
  }, [])
  if(loading) return <p>Loading expenses...</p>;
  if(error){
  
    return (
      <div>
        <p>{error}</p>

        <button><Link to="/dashboard">Back</Link></button>
      </div>
    )
  }
     
  return (
    <div>
      <h2>All Expenses</h2>
      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount ($)</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((item, index) => (
            <tr key={index}>
              <td>{item.description}</td>
              <td>{item.amount}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button><Link to="/dashboard">Back</Link></button>
    </div>
  ); 
 
}