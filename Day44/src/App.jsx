import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import ProductList from './pages/ProductList'
import Cart from './pages/Cart'

function App() {

  return (
    <>
     <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
     </Router>
    </>
  )
}

export default App
