import React from "react"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./pages/Navbar"
import Footer from "./pages/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import RestaurantMenu from "./pages/RestaurantMenu"
import { Toaster } from "react-hot-toast"

function App() {

  return (
    <Router>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/restaurant/:id" element={<RestaurantMenu />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
