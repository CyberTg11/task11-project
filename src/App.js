import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const [num,setNum] = useState(0)
  function myFunc(e){
    setNum(num+1)
    console.log(num+1)
  }
  function myFunc1(e){
    setNum(num-1)
    console.log(num-1)
  }
  return (
      <div className='counterDiv'>
        <h2>Number counter</h2>
        <section>
        <button onClick={myFunc1}>-</button>
        <span>{num}</span> 
        <button onClick={myFunc}>+</button>
        </section>
      </div>
  );
}

export default App;