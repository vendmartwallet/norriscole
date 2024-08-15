import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home/Home'
import About from './pages/about/About';
import Services from './pages/services/Services';
import Testimonial from './pages/testimonial/Testimonial';
import ContactUs from './pages/contactUs/ContactUs';

const App = () => {
  return (
   <div>
    <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/testimonial' element={<Testimonial />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
   </div>
  )
}

export default App