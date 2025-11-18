
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='bg-[#EDE7B5] flex justify-around items-center h-16 w-[90%] rounded-md mt-10 mx-10 mr-3 text-[#354F2C] font-bold text-lg'>
        <NavLink className={(e)=>e.isActive?"text-red-600":" "} to="/">Home</NavLink>
        <NavLink className={(e)=>e.isActive?"text-red-600":" "} to="/product">Product</NavLink>
        <NavLink className={(e)=>e.isActive?"text-red-600":" "} to="/about">About</NavLink>
        <NavLink className={(e)=>e.isActive?"text-red-600":" "}to="/create">Create Recipes</NavLink>
        <NavLink className={(e)=>e.isActive?"text-red-600":" "}to="/fav">Favorite</NavLink>
    </div>
  )
}

export default Navbar