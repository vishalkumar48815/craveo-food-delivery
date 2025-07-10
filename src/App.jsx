import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import NavBar from './components/Navbar'
import { BrowseMenu } from './pages/BRowseMenu'
import { Signup } from './pages/Signup'
import { Login } from './pages/login'
import TrackOrders from './pages/TrackOrders'
import Restaurants from './pages/Restaurants'
import Offers from './pages/Offers'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<BrowseMenu />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/orders" element={<TrackOrders />} />
          <Route path="/log-in" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
