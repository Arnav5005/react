import { useState } from "react"
function App() {
  const[color,setColor]=useState('white')
  return (
      <div className="w-full h-screen " style={{backgroundColor:color}}> {/* this is the syntax of using inline css in react , we don't need to inject color variable due to pre existing curly braces */}
          <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            {/* now make color bar */}
            <div className=" flex justify-center gap-6 bg-white px-2 py-2">

                {/* now we need to add an onClick event if this was plain HTML then we would use onClick="setColor('red')" but this is JSX here onClick works like onClick={} so now we can think of two things like in JS we pass a function reference i.e. only function name but along with function name we also have to pass parameter which is color name se we need something like setColor('red') but if we put this insu=ide onclick then it would be treated as a script and onclick would take the function returned value as input but we want function to go inside it therefore we will use a callback function */}

                <button className="bg-red-600 w-fit rounded-xl px-1 py-1" onClick={()=>{setColor('red')}}>red</button>
                <button className="bg-blue-600 w-fit rounded-xl px-1 py-1" onClick={()=>{setColor('blue')}}>blue</button>
                <button className="bg-green-600 w-fit rounded-xl px-1 py-1" onClick={()=>{setColor('green')}}>green</button>
                <button className="bg-teal-500 w-fit rounded-xl px-1 py-1" onClick={()=>{setColor('teal')}}>teal</button>
                <button className="bg-lime-400 w-fit rounded-xl px-1 py-1" onClick={()=>{setColor('lime')}}>lime</button>
            </div>
          </div>
      </div>
  )
}

export default App