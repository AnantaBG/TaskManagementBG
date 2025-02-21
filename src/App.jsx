import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Allpages/HomePage"
import AllTasks from "./components/HomePage/SideBarComponents/AllTasks"


function App() {

  return (
<div className="bg-blue-200 text-stone-900 h-screen p-2">
  <BrowserRouter>
  <Routes>
    <Route exact path="/" element={<HomePage />}/>
    <Route path="alltasks" element={<AllTasks />}/>

  </Routes>
  </BrowserRouter>
  
</div>
  )
}

export default App
