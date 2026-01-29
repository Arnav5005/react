import { useState , useCallback , useEffect , useRef} from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [numAllowed, setNumallowed] = useState(false) // default value is false
  const [charAllowed, setCharallowed] = useState(false) // default value is false
  const [password, setPassword] = useState("")
  
  // generate random password
   
  // fn = useCallback(() => {uses state/props here}, [deps]) we also pass an array of dependencies in this hook

  // The useCallback hook in React is a performance optimization tool that memoizes (caches) a function definition between component re-renders. This ensures the function's reference remains stable, preventing unnecessary re-renders of child components that depend on it

  // we are gonna use useCallback hook becuase when we choose character or number the function is gonna re-run so we can optimise it so that page doesn't refresh 
  
  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowed){
      str+="1234567890"
    }

    if(charAllowed){
      str+="`~!@#$%^&*()-_+=[]{};':,./<>?</>"
    }

    for(let i=0; i<length; i++){
      let index=Math.floor(Math.random()*str.length+1) // gives a single character of str
      pass+=str.charAt(index)
    }

    setPassword(pass)

  },[length,numAllowed,charAllowed,setPassword]) // here we put setPassword for optimisation purposes we need not to add it compulsarily

  // how math.random works ?

  // function getRandomInt(min, max) {
  //    return Math.floor(Math.random() * (max - min + 1)) + min;
  // }
  // getRandomInt(5, 15); // between 5 and 15

  // math.random gives a random number between [0,1)
  // max - min + 1 = 15 - 5 + 1 = 11
  // 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15  → 11 numbers
  // Math.random() * 11  ----->  0   → 10.999...
  // Math.floor(Math.random() * 11) + 5 -----> final range 5 to 15 (inclusive)


  // now to run this function we would need useEffect hook

  // useEffect lets you run side effects after React renders.

  // Think: “After React shows the UI, run this extra code.”

  // What it’s used for
  // Fetch data from an API
  // Update document.title
  // Set up / clean up timers (setInterval)
  // Add / remove event listeners
  // Run your password generator when options change

  // useEffect(() => {code runs after render}, [dependencies]) same as useCallback

  useEffect(()=>{
    passwordGenerator()
  },[length , numAllowed , charAllowed , passwordGenerator])

  // copy functionality

  // for this we will first need to target what we need to copy and for that we will use useRef hook

  // useRef is a React hook that gives you a persistent “box” whose value stays the same across renders, without causing re-renders when it changes.

  // const myRef = useRef(initialValue) myRef.current is the stored value

  const passwordref=useRef(null) // default value null

  const copyPassword=useCallback(()=>{
    window.navigator.clipboard.writeText(password)
    passwordref.current?.select() // to give user and idea how much text is selected
    // passwordref.current?.setSelectionRange(0,7) // to only select first 7 characters of the password
    alert('copied')
  },[password])

  return (
    <>
    {/* UI */}
    <h2 className='w-full text-center font-bold my-3'>Password generator</h2>

    <div className='w-160 mx-auto rounded-lg px-4 my-4 bg-gray-800 flex flex-col items-start'>

      <div className='flex rounded-lg overflow-hidden mb-4 w-full'>

        <input type="text" value={password} placeholder='password' readOnly className='mx-3 w-full bg-black rounded-lg mt-2'ref={passwordref}/>

        <button onClick={copyPassword} className='mt-2'>copy</button>
      </div>

      {/* for slider , and checkboxes */}

      <div className='w-full flex justify-around text-sm gap-x-2'>

        {/* for slider */}

        <div className='flex items-center gap x-1'>
          <input type="range" min={8} max={20} value={length} className='cursor-pointer mx-3' onChange={(e)=>{setLength(e.target.value)}}/> {/* this onchange property let you change the value on slider by inputting a function */}
          {/* how onChange event works :
              Inside it: e.target = the element that triggered the event (your <input type="range">)
              e.target.value = the current value of the slider (like "8", "12", …)
          */}
          <label>Length:{length}</label>
        </div>

        {/* for number checkbox */}

        <div className='flex text-sm gap-x-2'>
          <label className='ml-10'>Numbers</label>
          <input type="checkbox" defaultChecked={numAllowed} 
            onChange={
              ()=>{
                setNumallowed((prev)=>{
                  return !prev
                })
              }
            }
          />
        </div>

        {/* for character checkbox */}

        <div className='w-full flex text-sm gap-x-2'>
          <label className='ml-10'>special Character</label>
          <input type="checkbox" defaultChecked={charAllowed} 
            onChange={
              ()=>{
                setCharallowed((prev)=>{
                  return !prev
                })
              }
            }
          />
        </div>

      </div>
    </div>
    </>
  )
}

export default App