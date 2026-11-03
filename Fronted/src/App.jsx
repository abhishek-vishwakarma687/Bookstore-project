import React from 'react'

import Home from './home/Home'
import Signup from './components/Signup';
import { Routes,Route } from "react-router-dom";
import Courses from './courses/Courses';
import Contact from './components/Contact';

const App = () => {
  return (
   <>
   {/* <Home/>
   <Course/> */}
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/course' element={<Courses/>} />
    <Route path='/signup' element={<Signup/>} />
    <Route path='/contact' element={<Contact/>} />
   </Routes>
   </>
  )
}

export default App
