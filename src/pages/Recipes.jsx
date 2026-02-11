import { useContext } from "react"
import { recipeContext } from "../context/RecipeContext"

const Recipes = () => {
  const {recipe} = useContext(recipeContext)

  const renderRecipe = recipe.map((e)=>{
    return <li key={e.id}>
      {e.title}
    </li>
     
})
  return (
    <ol>
     {renderRecipe}
    </ol>
  )
}

export default Recipes
