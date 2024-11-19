import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage'
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Error from './Pages/Error';

const App = () => {
  return (
    <div className='my-app'>
      <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Error />} />
                <Route path="/error" element={<Error />} />
            </Routes>
            <Footer />
    </div>
  )
}

export default App