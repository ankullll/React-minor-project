import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipeContext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const {recipe,setrecipe} = useContext(recipeContext)
    const navigate = useNavigate()
     
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();
  const submitHandler = (data) => {
    data.id = nanoid();
    const copydata = [...recipe]
    copydata.push(data)
    setrecipe(copydata)
    localStorage.setItem("recipes",JSON.stringify(copydata))
   
    toast.success("New Recipe Added !")
    navigate("/recipes")
    reset();
  };
   
 
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
      <button className="mt-5 block py-2 px-4  rounded bg-gray-900">
        Save Recipe
      </button>
    </form>
  );
};

export default Create;
