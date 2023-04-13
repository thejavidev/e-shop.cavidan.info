import { Routes,Route,Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import Shop from '../pages/Shop';
import ProductDetails from '../pages/ProductDetails';
import CheckOut from '../pages/CheckOut';
import Cart from '../pages/Cart';
import Login from '../pages/Login';
import Loginin from '../pages/Loginin';


const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to="home" />} />
        <Route path='home' element={<Home />} />
        <Route path='shop' element={<Shop />} />

        <Route path='shop/:id' element={<ProductDetails />} />
        <Route path='checkout' element={<CheckOut />} />
        <Route path='cart' element={<Cart />} />
        <Route path='login' element={<Login />} />
        <Route path='signin' element={<Loginin />} />
    </Routes>
  )
}

export default Routers
