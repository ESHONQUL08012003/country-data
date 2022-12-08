import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar"
import Conturies from './pages/Conturies/conturies'
import Home from "./pages/Home"
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Navbar/>
    <Conturies/>
    <Home/>
   </>
  )
}

export default App
