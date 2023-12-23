import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import ProductDetail from './Components/ProductDetail'
import { CartContext } from './CartContext'
import { useEffect, useState } from 'react'

function App() {
  const [cart, setCart] = useState(null)

  useEffect(() => {
    if (cart !== null) {
      const cartData = localStorage.getItem("Cart")
      console.log(cartData)
    }
  }, [])

  useEffect(() => {
    if (cart !== null) {
      localStorage.setItem("Cart", JSON.stringify(cart))
    }
  }, [cart])

  return (
    <BrowserRouter>
      <CartContext.Provider value={{ cart, setCart }}>
        <div className="bg-lavender w-full text-xl text-black font-montserrat">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<ProductDetail />} />
          </Routes>
        </div>
      </CartContext.Provider>
    </BrowserRouter>
  )
}

export default App
