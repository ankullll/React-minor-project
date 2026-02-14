import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Recipes from "../pages/Recipes"
import Create from "../pages/Create"
import SingleRecipe from "../pages/SingleRecipe"
import PageNotFound from "../pages/PageNotFound"
import Fav from "../pages/Fav"
const Mainroute = () => {
  return (
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/recipes" element={<Recipes />} />
    <Route path="/recipes/details/:id" element={<SingleRecipe/>} />
    <Route path="/create-recipes" element={<Create />} />
    <Route path="*" element={<PageNotFound />} />
    <Route path="/fav" element={<Fav/>} />
   </Routes>
  )
}

export default Mainroute
