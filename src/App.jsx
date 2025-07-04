import Navbar from "./component/Navbar"
import Products from "./pages/Products"
import Error from "./pages/Error"
import Details from "./pages/Details"
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/details/:id" element={<Details/>}/>
        {/* <Route path="/:details/id" element={<}/> */}
        <Route path="*" element={<Error/>}/>
      </Routes>

    </>
  )
}

export default App
