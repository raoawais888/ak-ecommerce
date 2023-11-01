import {BrowserRouter , Routes , Route} from "react-router-dom"
import Home from "./pages/home/Home"
import Shop from "./pages/Shop/Shop"
import Register from "./admin/Pages/register/Register"
import Login from "./admin/Pages/login/Login"


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
 
     
   </>
  )
}

export default App
