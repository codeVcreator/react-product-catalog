import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import InitializeLocalStorage from './Components/InitializeLocalStorage';
import Homepage from './Pages/Homepage'
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';
import Contact from './Pages/Contact';
import Products from './Pages/Products'
import About from './Pages/About';
import Error from './Pages/Error';
import ProductDetails from './Pages/ProductDetails';
import Admin from './Pages/Admin';


const App = () => {
  return (
    <div className='my-app'>
      <InitializeLocalStorage />
      <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path='/customer/products' element={<Products />} />
                <Route path='/customer/products/:id' element={<ProductDetails />} />
                <Route path='/admin/products' element={<Admin />} />
                <Route path="*" element={<Error />} />
                <Route path="/error" element={<Error />} />
            </Routes>
            <Footer />
    </div>
  )
}

export default App