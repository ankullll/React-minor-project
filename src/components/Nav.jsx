import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <div className="flex justify-center gap-10 mb-10 items-center ">
        <NavLink to="/" className={(e)=>e.isActive ? "text-pink-400" : ""} >Home</NavLink>
        <NavLink to="/about" className={(e)=>e.isActive ? "text-pink-400" : ""} >About</NavLink>
        <NavLink to="/recipes" className={(e)=>e.isActive ? "text-pink-400" : ""} >Recipes</NavLink>
        <NavLink to="/create-recipes" className={(e)=>e.isActive ? "text-pink-400" : ""} >Create Recipe</NavLink>
    </div>
  )
}

export default Nav
