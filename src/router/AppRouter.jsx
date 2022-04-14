import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../../src/pages/login/Login'
import Navbar from '../components/navbar/Navbar'
import Footer from "../components/footer/Footer"
import Home from "../../src/pages/home/Home"
import About from "../pages/about/About"
import Details from "../pages/details/Details"
import PrivateRouter from './PrivateRouter'



const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<PrivateRouter />} >
          <Route path="" element={<Home />} />
        </Route>

        <Route path="/about" element={<PrivateRouter />} >
          <Route path="" element={<About />} />

        </Route>

        <Route path="/details" element={<Details />} />
      </Routes>


      <Footer />
    </BrowserRouter>
  )
}

export default AppRouter