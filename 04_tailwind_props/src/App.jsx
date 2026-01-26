import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>

      {/* using a template from tailwind css but we have made it a component (like a function so that we can use it again and again) */}
      <Card userName="Arnav" designation="God" />
      <Card userName="judith" designation="ceo"/>
      <Card/> {/* we didn't passed the props so it took default value that i wrote in the Card function */}
      {/* now if we want the same template but with different information then we use props */}
    </>
  )
}

export default App