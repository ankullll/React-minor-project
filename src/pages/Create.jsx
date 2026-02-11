import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipeContext } from "../context/RecipeContext";

const Create = () => {
    const {recipe,setrecipe} = useContext(recipeContext)
     
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const submitHandler = (data) => {
    data.id = nanoid();
    setrecipe([...recipe,data])
   
    
    reset();
  };
   console.log(recipe)
 
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <input
        className="block p-2 border-b outline-0"
        type="url"
        placeholder="Enter image url"
        {...register("image")}
      />
      <small className="text-red-500 p-2">This is how the error is shown</small>
      <input
        {...register("title")}
        type="text"
        placeholder="Recipe Title"
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
      <textarea
        {...register("description")}
        type="text"
        placeholder="Write instruction  separated by comma "
        className="block p-2 border-b outline-0"
      />
      <select
        {...register("categories")}
        type="text"
        className="block p-2 border-b outline-0 bg-gray-800"
      >
        <option value="cat-1">Category1</option>
        <option value="cat-2">Category2</option>
        <option value="cat-3">Category3 </option>
      </select>
      {/* <small className="text-red-500 p-2">This is how the error is shown</small> */}
      <button className="mt-5 block py-2 px-4  rounded bg-gray-900">
        Save Recipe
      </button>
    </form>
  );
};

export default Create;
