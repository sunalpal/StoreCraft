
import { Routes, Route } from 'react-router-dom' 
import Home from "../pages/Home"   
import About from "../pages/About"   
import Create from "../pages/Create"
import Product from '../pages/Product'   
import Fev from "../pages/Fev"
import PageNotFound from '../pages/PageNotFound'
import SingleProduct from '../pages/SingleProduct'
const MainRoutes = () => {
  return (

    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/product/details/:id' element={<SingleProduct/>}></Route>
        <Route path='/fev' element={<Fev/>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>

    </Routes>
    

  )
}

export default MainRoutes