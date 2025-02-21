import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Allpages/HomePage"
import AllTasks from "./components/HomePage/SideBarComponents/AllTasks"
import ToDo from "./components/HomePage/SideBarComponents/ToDo"
import ImportantTask from "./components/HomePage/SideBarComponents/ImportantTask"
import DoneTasks from "./components/HomePage/SideBarComponents/DoneTasks"
import Login from "./components/Auth/Login"
import Register from "./components/Auth/Register"


function App() {

  return (
<div className="bg-blue-200 text-stone-900 min-h-screen p-2">
  <BrowserRouter>
  <Routes>
    <Route exact path="/" element={<HomePage />}>
    <Route index element={<AllTasks />}/>
    <Route path="todo" element={<ToDo/>}/>
    <Route path="inprogress" element={<ImportantTask />}/>
    <Route path="done" element={<DoneTasks />}/>
    </Route>
    <Route path="login" element={<Login/>}/>
    <Route path="register" element={<Register></Register>}/>
  </Routes>
  </BrowserRouter>
  
</div>
  )
}

export default App
