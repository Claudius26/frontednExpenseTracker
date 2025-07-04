import { useEffect } from "react";
import { amountSpent} from "./amountspent"
import { Link } from "react-router-dom";
import {useState} from "react";

export function TotalAmountSpent(){
  const [totalAmount, setTotalAmount] = useState();
  const [error, seterror] = useState('');

  useEffect(()=>{
    async function fetchData(){
        const data = await amountSpent();
        if(data.success){
          setTotalAmount(data.data);
        }else{
          seterror(data.message)
        }
       
    }
    fetchData();
  },)

  if(error){
    return <div className="errorConatiner">
      <p>${error}</p>
      <div>
        <button> <button><Link to="/dashboard">Back</Link></button></button>
      </div>
    </div>
  }
  return (
    <div className="totalConatiner">
      <div className="totalAmountContainer">
        <h1>Total Expenses</h1>
        <p>${totalAmount}</p>
      </div>
      <div className="backLink">
        <button><Link to="/dashboard">Back</Link></button>
      </div>
    </div>
  )

}