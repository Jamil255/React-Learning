import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './Components/Navbar'
import Page from './pages/Page'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<Page />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
