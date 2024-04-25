import React from "react"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./pages/Navbar"
import Footer from "./pages/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
