import React, { createContext, useState } from 'react'

export const recipeContext  = createContext(null)

const RecipeContext = (props) => {
    const [recipe, setrecipe] = useState([])
  return (
    <recipeContext.Provider value={{recipe, setrecipe}}>{props.children}</recipeContext.Provider>
  )
}

export default RecipeContext
