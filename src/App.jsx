import Navbar from "./component/Navbar"
import Home from "./pages/Home"
import Error from "./pages/Error"
import Details from "./pages/Details"
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/details" element={<Details/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>

    </>
  )
}

export default App
