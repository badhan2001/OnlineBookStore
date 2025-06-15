 import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/home'
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AllBooks from './pages/AllBooks';
const app = () => {
  return (
    <div>
   {/* </div><div className="min-h-screen flex flex-col"> */}
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="/all-books" element={<AllBooks />} />
          <Route  path="/cart" element={<Cart />} />
          <Route  path="/profile" element={<Profile />} />
          <Route  path="/LogIn" element={<LogIn />} />
          <Route  path="/SignUp" element={<SignUp />} />
        </Routes> <Footer />
      </Router>
    </div>
  )
}

export default app


