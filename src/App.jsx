import { useState } from 'react'
import Home from './pages/Home'
import Path from './routes/Path'
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css'
import { BrowserRouter as Router} from 'react-router-dom'

AOS.init();

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Path />
    </Router>
    </>
  )
}

export default App
