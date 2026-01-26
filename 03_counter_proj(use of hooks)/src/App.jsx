import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // using hooks 
  let [counter , setCounter] = useState(5) // this useState hook returns an array 
  // here counter is a variable and setCounter is a function which is responsible to update that counter variable so we can manipulate setCounter according to our need


  // let counter=5

  const add_value=()=>{
    // counter+=1
    setCounter(counter+1)
    console.log("Value added successfully" , counter);
  }
  const sub_value=()=>{
    // counter-=1
    setCounter(counter-1)
    console.log("Value removed successfully" , counter)
  }
  return (
    <>
      <h1>counter project</h1>
      <h3>counter value : {counter}</h3>
      <button onClick={add_value}>Add value</button>
      <button onClick={sub_value}>Remove value</button>
    </>
  )
}
// the value in counter doesn't change i.e. UI updation doesn't work that's why we need "hooks" useState hook is used for UI updation
export default App