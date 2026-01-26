// here we have made another function called Testing and we are using that function in this function called App
import Testing from "./Testfunctionlol"
// in jsx we can only return a single element therefore we use fragments(<> </>) to return multiple elements
function App() {
  return (
    <>
    <h1>Hello World</h1>
    <Testing/>
    </>
  )
}

export default App