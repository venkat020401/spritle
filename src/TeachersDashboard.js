import axios from 'axios';
import { useState } from 'react';
import './App.css';
import Card from './Card';

function App() {

  // set states
  const [NumberOne, setNumberOne] = useState([]);
  const [NumberTwo, setNumberTwo] = useState([]);
  const [Operations, SetOperations] = useState('');
  const [Result, setResult] = useState('');

  const now = new Date();


  // function for addition ( + )
  const CalAddition = (event) => {
    event.preventDefault();

    if (NumberOne.length > 1 || NumberTwo.length > 1) {
      alert("Enter a single digit numbers only Eg : 0 to 9");
    }
    else {
      let Result = parseInt(NumberOne) + parseInt(NumberTwo);
      SetOperations("+");
      setResult(parseInt(Result));
      const value = {
        "NumberOne": NumberOne,
        "NumberTwo": NumberTwo,
        "Result": Result,
        "operation": "+",
        "equal": "=",
        "timestamp": now
      }
      axios.post("https://63d3ccafc1ba499e54c9117f.mockapi.io/cal_history", value);
    }

  };


  // function for Subtraction ( - )
  const CalSubtraction = (event) => {
    event.preventDefault();

    if (NumberOne.length > 1 || NumberTwo.length > 1) {
      alert("Enter a single digit numbers only Eg : 0 to 9");
    }

    else {

      let Result = parseInt(NumberOne) - parseInt(NumberTwo);
      SetOperations("-");
      setResult(parseInt(Result));
      const value = {
        "NumberOne": NumberOne,
        "NumberTwo": NumberTwo,
        "Result": Result,
        "operation": "-",
        "equal": "=",
        "timestamp": now
      }
      axios.post("https://63d3ccafc1ba499e54c9117f.mockapi.io/cal_history", value);
    }
  };

  // function for Multiplication ( × )
  const CalMultiplication = (event) => {
    event.preventDefault();

    if (NumberOne.length > 1 || NumberTwo.length > 1) {
      alert("Enter a single digit numbers only Eg : 0 to 9");
    }
    else {
      let Result = parseInt(NumberOne) * parseInt(NumberTwo);
      SetOperations("×");
      setResult(parseInt(Result));
      const value = {
        "NumberOne": NumberOne,
        "NumberTwo": NumberTwo,
        "Result": Result,
        "operation": "×",
        "equal": "=",
        "timestamp": now
      }
      axios.post("https://63d3ccafc1ba499e54c9117f.mockapi.io/cal_history", value);
    }
  };

  // function for Division ( ÷ )
  const CalDivision = (event) => {
    event.preventDefault();

    if (NumberOne.length > 1 || NumberTwo.length > 1) {
      alert("Enter a single digit numbers only Eg : 0 to 9");
    }

    else {
      let Result = parseInt(NumberOne) / parseInt(NumberTwo);
      SetOperations("÷");
      setResult(parseInt(Result));
      const value = {
        "NumberOne": NumberOne,
        "NumberTwo": NumberTwo,
        "Result": Result,
        "operation": "÷",
        "equal": "=",
        "timestamp": now
      }
      axios.post("https://63d3ccafc1ba499e54c9117f.mockapi.io/cal_history", value);
    }
  };

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div>
            <h3>Calculator</h3>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-6 mt-5'>
            <input className='form-control mt-2' name="NumberOne" type="number" placeholder='Enter the first value' value={NumberOne} onChange={(e) => setNumberOne(e.target.value)} />
            {
              NumberOne.length > 1 ? <span style={{ "color": "crimson" }}>Enter a single digit numbers only Eg : 0 to 9</span> : ""
            }
          </div>
          <div className='col-6 mt-5'>
            <input className='form-control mt-2' name="NumberTwo" type="number" placeholder='Enter the second value' value={NumberTwo} onChange={(e) => setNumberTwo(e.target.value)} />
            {
              NumberTwo.length > 1 ? <span style={{ "color": "crimson" }}>Enter a single digit numbers only Eg : 0 to 9</span> : ""
            }
          </div>

        </div>
        <div className='row mt-5'>
          <div className='col-3 d-flex justify-content-center'>
            <button className='btn btn-primary' type='submit' onClick={CalAddition}>Addition ( + ) </button>
          </div>
          <div className='col-3 d-flex justify-content-center'>
            <button className='btn btn-primary' type='submit' onClick={CalSubtraction}>Subtraction ( - ) </button>
          </div>
          <div className='col-3 d-flex justify-content-center'>
            <button className='btn btn-primary' type='submit' onClick={CalMultiplication}>Multiplication ( × ) </button>
          </div>
          <div className='col-3 d-flex justify-content-center'>
            <button className='btn btn-primary' type='submit' onClick={CalDivision}>Division ( ÷ ) </button>
          </div>
        </div>
        <div className='row mt-5'>

          <div className=' mt-5'><h3>Result<span style={{ "color": "crimson" }}>{Result}</span></h3></div>
        </div>
      </div>


    </>
  );
};

export default App;