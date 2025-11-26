import React from 'react'
import Home from "./home/Home.jsx"
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider.jsx';
import { Routes, Route, Outlet, Navigate } from "react-router-dom"
import Navbar from './Components/navbar.jsx'
import Footer from './Components/Footer.jsx'

import Signup from './Components/Signup.jsx'
import Courses from './Courses/Courses.jsx'
import Contact from './Components/Contact.jsx'

function App() {
  const [authUser, setAuthUser] = useAuth()
  console.log(authUser)


  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses'
           element={authUser? <Courses />: <Navigate to="/signup"/>} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Toaster/>
        
      </div>

    </>
  )
}

export default App
