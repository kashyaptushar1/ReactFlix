import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Trending from "./components/Trending"


function App() {
  return (
    <div className="w-screen h-screen bg-[#1F1E24] flex  " >
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/trending" element={<Trending/>} />
       
      </Routes>
    </div>
  )
}

export default App
