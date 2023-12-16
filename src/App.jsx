import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  const [amount,setAmount]=useState(0)
  const [year,setYear]=useState(0)
  const [rate,setRate]=useState(0)
  
  const [intrest,setIntrest]=useState(0)

  console.log(amount,rate,year);

  const calculate=(e)=>{
    const output=amount*rate*year/100;
    console.log(output);
    setIntrest(output);
  }

  const clear=(e)=>{
    setAmount(0)
    setRate(0)
    setYear(0)
    setIntrest(0)
  }
  return (


    <div className="App">
      <div className="container">
        <div className="header">
          <h1>Simple Intrest Calculator</h1><hr />
          <p>Calculate your simple intrest with us ❤️</p>
        </div>
        <div className="total">
          <p>Your Total Intrest</p>
          <h2>{intrest} ₹</h2>
        </div>
        <div className="form">
          <form>
            <div className="input">
              <TextField value={amount||""} onChange={(e)=>setAmount(e.target.value)} id="outlined-basic" label="Amount" variant="outlined" /><br />
              <TextField value={rate||""} onChange={(e)=>setRate(e.target.value)} id="outlined-basic" label="Rate" variant="outlined" /><br />
              <TextField value={year||""} onChange={(e)=>setYear(e.target.value)} id="outlined-basic" label="Year" variant="outlined" /><br />
            </div>
            <div className="button">
              <Button onClick={(e)=>calculate(e)} variant="contained">Calculate</Button>
              <Button onClick={(e)=>clear(e)} variant="outlined">Reset</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
