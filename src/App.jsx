import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import ProductDetail from './Components/ProductDetail'

function App() {

  return (
    <BrowserRouter>
      <div className="bg-lavender w-full text-xl text-black font-montserrat">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
