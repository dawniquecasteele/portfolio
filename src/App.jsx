import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css";

import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import Homepage from "./homepage/homepage";
import About from "./about/about"

import Autobot from "./work/autobotProject";
import BloomPedia from "./work/bloompediaProject";
import SmartEvaluator from "./work/smartevaluator";


function App() {
  const [count, setCount] = useState(0)

  return (
 
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            
            
            
            <Route path="/work/autobot" element={<Autobot />} />
            <Route path="/work/bloompedia" element={<BloomPedia/>} />
            <Route path="/work/smartevaluator" element={<SmartEvaluator/>} />
            

          </Routes>
          <Footer />
        </Router>
      </div>
  )
}

export default App;
