import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15)
  
  const addValue = () =>{
    counter+=1
    setCounter(counter)
  }
  const decValue = () =>{
    if (counter > 0){
      setCounter(counter-1)
    }
    else{
      alert("Value can't be negative")
    }
    
  }
  return (
    <>
      <h1>Counter project</h1>
      <p>Counter value : {counter}</p>
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={decValue}>Decrease Value</button>
    </>
  )
}

export default App
