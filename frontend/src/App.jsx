import { Route, Routes} from "react-router-dom"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Dashboard from "./components/Dashboard"
import PrivateRoute from "./components/PrivateRoute"
import Homepage from "./components/Homepage"
import {Toaster} from "sonner"
function App() {



  return (
    <>
      <Toaster richColors/>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route element={<PrivateRoute allowedRole={["admin"]}/>}>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Route>

        <Route element={<PrivateRoute allowedRole={["user"]}/>}>
          <Route path="/" element={<Homepage/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
