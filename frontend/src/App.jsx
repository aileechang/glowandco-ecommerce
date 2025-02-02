import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import OrderDetails from './pages/OrderDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import { ToastContainer } from 'react-toastify';
import Verify from './pages/Verify';
import Account from './pages/Account';

const App = () => {
  return (
    <div className='px-3 sm:px-[2vw] md:px-[3vw] lg:px-[5vw] bg-[#F0EFEB] min-h-screen'>
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/account' element={<Account/>} />
        <Route path='/place-order' element={<PlaceOrder/>} />
        <Route path='/orders/:confirmationCode' element={<OrderDetails />} />
        <Route path='/verify' element={<Verify />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App;
