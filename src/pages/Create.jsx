import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipeContext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const { recipe, setrecipe } = useContext(recipeContext);
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();
  const submitHandler = (data) => {
    data.id = nanoid();
    const copydata = [...recipe];
    copydata.push(data);
    setrecipe(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));

    toast.success("New Recipe Added !");
    navigate("/recipes");
    reset();
  };

  return (
    <div>
      <img
        src="/assets/flower-japan.svg"
        alt=""
        className="h-[5.5vh] w-[4.5vw] absolute top-34 left-60 "
      />
      <img
        src="/assets/flower-japan.svg"
        alt=""
        className="h-[5.5vh] w-[4.5vw] absolute top-134 left-20 "
      />
      <img
        src="/assets/flower-japan.svg"
        alt=""
        className="h-[5.5vh] w-[4.5vw] absolute top-94 left-280 "
      />

      <img
        src="/assets/leaf-1.svg"
        alt=""
        className="h-[5.5vh] w-[4.5vw] absolute top-100 left-90 "
      />
      <img
        src="/assets/leaf-2.svg"
        alt=""
        className="h-[5.5vh] w-[4.5vw] absolute top-150 left-220 "
      />
      <img
        src="/assets/leaf-3.svg"
        alt=""
        className="h-[5.5vh] w-[4.5vw] absolute top-35 left-150 "
      />
      <div className="bg-[#be3740] w-[55%] mx-auto mt-20 rounded-2xl overflow-hidden">
        <h1 className="font-[Lora] text-3xl text-center mt-5 text-[#feefdf] -mb-1 ">
          Create New Recipe{" "}
        </h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <input
            className="block outline-0 bg-[#fcbfbc] border border-[#494139]  text-sm   w-[70%] px-3 py-2.5 shadow-xs  mx-auto mt-7 rounded-2xl mb-2 text-center"
            type="url"
            placeholder="Enter image url"
            {...register("image")}
          />
          {/* <small className="text-red-500 p-2">This is how the error is shown</small> */}
          <input
            {...register("title")}
            type="text"
            placeholder="Recipe Title"
            className="block outline-0 bg-[#fcbfbc] border border-[#494139]  text-sm   w-[70%] px-3 py-2.5 shadow-xs  mx-auto mt-4 rounded-2xl mb-2 text-center"
          />
          <input
            {...register("chef")}
            type="text"
            placeholder="Chef Name"
            className="block outline-0 bg-[#fcbfbc] border border-[#494139]  text-sm   w-[70%] px-3 py-2.5 shadow-xs  mx-auto mt-4 rounded-2xl mb-2 text-center"
          />
          {/* <small className="text-red-500 p-2">This is how the error is shown</small> */}
          <textarea
            {...register("description")}
            type="text"
            placeholder="Description"
            className="block outline-0 bg-[#fcbfbc] border border-[#494139]  text-sm   w-[70%] px-3 py-2.5 shadow-xs  mx-auto mt-4 rounded-2xl mb- text-center"
          />
          {/* <small className="text-red-500 p-2">This is how the error is shown</small> */}
          <textarea
            {...register("ingredients")}
            type="text"
            placeholder="Write ingredients separated by comma"
            className="block outline-0 bg-[#fcbfbc] border border-[#494139]  text-sm   w-[70%] px-3 py-2.5 shadow-xs  mx-auto mt-4 rounded-2xl mb-2 text-center"
          />
          {/* <small className="text-red-500 p-2">This is how the error is shown</small> */}

          <select
            {...register("category")}
            type="text"
            className="block outline-0 bg-[#fcbfbc] border border-[#494139]  text-sm   w-[70%] px-3 py-2.5 shadow-xs  mx-auto mt-4 rounded-2xl mb-2  text-center"
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="supper">Supper</option>
            <option value="dinner">Dinner</option>
          </select>
          {/* <small className="text-red-500 p-2">This is how the error is shown</small> */}
          <button className="block outline-0 bg-[#23bc33] border border-[#494139]  text-sm   w-[40%] px-3 py-2.5 shadow-xs  mx-auto mt-4 rounded-2xl mb-5">
            Save Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
