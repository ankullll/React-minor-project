import { useContext } from "react"
import { recipeContext } from "../context/RecipeContext"
import Recipecard from "../components/Recipecard"

const Recipes = () => {
  const {recipe} = useContext(recipeContext)

  const renderRecipe = recipe.map((e)=>{
    return <Recipecard recipe={e} key={e.id}/>
     
})
  return (
    <div className="flex flex-wrap  ">{ recipe.length > 0 ? renderRecipe : "No Recipe found"}</div>
    
  )
}

export default Recipes
