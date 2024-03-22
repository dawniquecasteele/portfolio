import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Home/Homepage.jsx';
import About from "./About/About.jsx";
import './App.css'

function App() {
  

  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
    </Router>
      
  )
}

export default App
