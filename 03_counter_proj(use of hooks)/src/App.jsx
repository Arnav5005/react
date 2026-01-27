import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // using hooks 

  let [counter , setCounter] = useState(5) // this useState hook returns an array 
  // here counter is a variable and setCounter is a function which is responsible to update that counter variable so we can manipulate setCounter according to our need


  // When you call:

  // const [counter, setCounter] = useState(5)
  // React creates an internal “state slot” for counter and gives you a setter (setCounter) that      knows how to update that slot.

  // setCounter accepts either:

  // a value: setCounter(10)
  // a function: setCounter(prev => prev + 1)
  // If you pass a function, React treats it as an “updater function” and later calls it like:

  // next = updater(previousState)



  // let counter=5

  const add_value=()=>{
    // counter+=1

    setCounter(counter+1)
    setCounter(counter+1) // both lines use the same old counter value from that render, so they both request “set it to 6” (for example). End result: it increments only once.
    
    // React doesn’t update state immediately when you call setCounter(...). In an event handler (like a button click), it queues your updates and applies them after the handler finishes (this is “batching”).

    // what if we want to do this exact thing like we have multiple setCounter(counter+1) and the value incremented the same number of times as there are setCounter(counter+1) used then use this -

    // To make them stack, use the functional updater, which always receives the latest queued value :

    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1) // functional updates stack correctly in the same event

    // Why setCounter(prev => prev + 1) works twice ?
    
    // When you pass a function, React stores the function in the queue instead of a final number. Later, when React processes the queue, it runs them in order, feeding each one the most recent computed value

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