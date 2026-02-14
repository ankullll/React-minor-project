import React, { createContext, useEffect, useState } from "react";

export const recipeContext = createContext(null);

const RecipeContext = (props) => {
  const [recipe, setrecipe] = useState([
   
  ]);

  useEffect(()=>{
    setrecipe(JSON.parse(localStorage.getItem("recipes")) || [])
    
  },[])
  return (
    <recipeContext.Provider value={{ recipe, setrecipe }}>
      {props.children}
    </recipeContext.Provider>
  );
};

export default RecipeContext;



//  {
//       id: 1,
//       title: "Sushi with cream",
//       ingredients:
//         "Pizza Dough , Tomatao sauce , Fresh mozzarella cheese,Fresh basil leaves,Olive oil",
//       chef: "Ankul",
//       description:
//         "Roll out the sushi dough and spread tomato sauce evenly Top with slices of fresh mozzarella and fresh basil leaves.",
//       instructions: [
//         "Preheat the oven to 475°F (245°C).",
//         "Roll out the sushi dough and spread tomato sauce evenly.",
//         "Top with slices of fresh mozzarella and fresh basil leaves.",
//         "Drizzle with olive oil and season with salt and pepper.",
//         "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
//         "Slice and serve hot.",
//       ],
//       image:
//         "https://plus.unsplash.com/premium_photo-1668146927669-f2edf6e86f6f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       category: "breakfast",
//     },