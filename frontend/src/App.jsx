import {BrowserRouter , Routes , Route} from "react-router-dom"
import Home from "./pages/home/Home"
import Shop from "./pages/Shop/Shop"


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />

      </Routes>
    </BrowserRouter>
 
     
   </>
  )
}

export default App
