import { useState } from "react"
function App() {
  const[color,setColor]=useState('white')
  return (
      <div className="w-full h-screen " style={{backgroundColor:color}}> {/* this is the syntax of using inline css in react , we don't need to inject color variable due to pre existing curly braces */}
          <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            {/* now make color bar */}
            <div className=" flex justify-center gap-6 bg-white px-2 py-2">
                <button className="bg-red-600 w-fit rounded-xl px-1 py-1">red</button>
                <button className="bg-blue-600 w-fit rounded-xl px-1 py-1">blue</button>
                <button className="bg-green-600 w-fit rounded-xl px-1 py-1">green</button>
                <button className="bg-sky-500 w-fit rounded-xl px-1 py-1">sky</button>
                <button className="bg-lime-400 w-fit rounded-xl px-1 py-1">lime</button>
            </div>
          </div>
      </div>
  )
}

export default App