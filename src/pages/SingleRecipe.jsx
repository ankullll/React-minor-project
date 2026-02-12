import { useContext } from "react";

import { recipeContext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { recipe, setrecipe } = useContext(recipeContext);
  const data = recipe.find((e) => params.id == e.id);

  const { register, handleSubmit} = useForm({
    defaultValues:{
        title : data.title,
        image : data.image,
        chef : data.chef,
        description: data.description,
        ingredients : data.ingredients,



    }
  });

  const submitHandler = (data) => {
    const index = recipe.findIndex((e) => params.id == e.id);
    const copyrecipe = [...recipe];
    copyrecipe[index] = { ...copyrecipe[index], ...data };
    setrecipe(copyrecipe);
    toast.success("Recipe Updated")
   
  };
  const deleteHandler = () => {
    let filter = recipe.filter((e) => e.id != params.id);
    setrecipe(filter);
    navigate("/recipes");
    toast.error("Recipe deleted");
  };


  return recipe ? (
    <div className="w-full flex">
      <div className="left  w-1/2 p-2">
        <h1 className="text-3xl font-black  ">{data.title}</h1>
        <img className="h-[30vh] mt-5" src={data.image} alt="" />
      </div>
      <form className="w-1/2 " onSubmit={handleSubmit(submitHandler)}>
        <input
          className="block p-2 border-b outline-0"
          type="url"
          placeholder="Enter image url"
          {...register("image")}
        />
        <small className="text-red-500 p-2">
          This is how the error is shown
        </small>
        <input
          {...register("title")}
          type="text"
          placeholder="Recipe Title"
          className="block p-2 border-b outline-0"
        />
        <input
          {...register("chef")}
          type="text"
          placeholder="Chef Name"
          className="block p-2 border-b outline-0"
        />
        {/* <small className="text-red-500 p-2">This is how the error is shown</small> */}
        <textarea
          {...register("description")}
          type="text"
          placeholder="Description"
          className="block p-2 border-b outline-0"
        />
        {/* <small className="text-red-500 p-2">This is how the error is shown</small> */}
        <textarea
          {...register("ingredients")}
          type="text"
          placeholder="Write ingredients separated by comma"
          className="block p-2 border-b outline-0"
        />
        {/* <small className="text-red-500 p-2">This is how the error is shown</small> */}

        <select
          {...register("category")}
          type="text"
          className="block p-2 border-b outline-0 bg-gray-800"
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="supper">Supper</option>
          <option value="dinner">Dinner</option>
        </select>
        {/* <small className="text-red-500 p-2">This is how the error is shown</small> */}
        <button className="mt-5 block py-2 px-4  rounded bg-blue-900">
          Update Recipe
        </button>
        <button
          onClick={deleteHandler}
          className="mt-5 block py-2 px-4  rounded bg-red-900"
        >
          Delete Recipe
        </button>
      </form>
    </div>
  ) : (
    "Loading"
  );
};

export default SingleRecipe;
