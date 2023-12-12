import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import ProductList from './views/ProductList'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <h1>Product Manager!!!!!!!!!</h1>
      <Navbar />
      <Routes>
        <Route path='/' element={<p>there isn't much going on here, make a selection</p>} />
        <Route path='/products' element={<ProductList />} />
      </Routes>
    </>
  )
}

export default App
