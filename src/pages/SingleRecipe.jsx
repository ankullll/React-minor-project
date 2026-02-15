import { useContext, useState } from "react";

import { recipeContext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { recipe, setrecipe } = useContext(recipeContext);
  const data = recipe.find((e) => params.id == e.id);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: data?.title,
      image: data?.image,
      chef: data?.chef,
      description: data?.description,
      ingredients: data?.ingredients,
    },
  });

  const updateHandler = (data) => {
    const index = recipe.findIndex((e) => params.id == e.id);
    const copyrecipe = [...recipe];
    copyrecipe[index] = { ...copyrecipe[index], ...data };
    setrecipe(copyrecipe);
    localStorage.setItem("recipes", JSON.stringify(copyrecipe));
    toast.success("Recipe Updated");
    navigate("/recipes");
  };
  const deleteHandler = () => {
    let filter = recipe.filter((e) => e.id != params.id);
    setrecipe(filter);

    const updatedFav = favdata.filter((f) => f?.id != params.id);
    setfavdata(updatedFav);
    localStorage.setItem("fav", JSON.stringify(updatedFav));
    navigate("/recipes");
    toast.error("Recipe deleted");
    localStorage.setItem("recipes", JSON.stringify(filter));
  };

  const [favdata, setfavdata] = useState(
    JSON.parse(localStorage.getItem("fav")) || [],
  );
  //  useEffect(()=>{

  //     return ()=>{
  //     }
  //   },[favdata])

  const FavHandler = () => {
    let copyfav = [...favdata];
    copyfav.push(data);
    setfavdata(copyfav);
    localStorage.setItem("fav", JSON.stringify(copyfav));
  };

  const UnFavHandler = () => {
    const unlike = favdata.filter((e) => e.id != data?.id);
    setfavdata(unlike);
    localStorage.setItem("fav", JSON.stringify(unlike));
  };
  return recipe ? (
    <div className="w-full flex">
      <div className="left  w-1/2 p-2">
        {favdata?.find((f) => f?.id == data?.id) ? (
          <i
            onClick={UnFavHandler}
            className="absolute ri-heart-3-fill text-3xl text-[#be3740] left-[35%] tip-31"
          ></i>
        ) : (
          <i
            onClick={FavHandler}
            className="absolute ri-heart-add-line text-3xl text-[#be3740] left-[35%] top-31"
          ></i>
        )}

        <h1 className="text-3xl font-[Lora] font-bold w-[55%] mr-1 -mb-2 ">
          {data?.title}
        </h1>
        <img
          className="h-[30vh] mt-5 rounded-2xl -ml-3 mb-5 "
          src={data?.image}
          alt=""
        />
        <h2 className="text-xl text-[#be3740] font-[Lora]">{data?.chef}</h2>
        <p className=" text-[#918273]  text-s w-[50%]">{data?.description}</p>
      </div>






      <div className="bg-[#be3740] w-[45%]   rounded-2xl overflow-hidden">
        <form className="w-1/2 " onSubmit={handleSubmit(updateHandler)}>
          <input
            className="block outline-0 bg-[#fcbfbc] border border-[#494139]  text-sm   w-[30vw] px-3 py-2.5 shadow-xs ml-10 mt-7 rounded-2xl  text-center"
            type="url"
            placeholder="Enter image url"
            {...register("image")}
          />
          {/* <small className="text-red-500 p-2">
            This is how the error is shown
          </small> */}
          <input
            {...register("title")}
            type="text"
            placeholder="Recipe Title"
            className="block outline-0 bg-[#fcbfbc] border border-[#494139]  text-sm   w-[30vw] px-3 py-2.5 shadow-xs ml-10 mt-2 rounded-2xl  text-center"
          />
          <input
            {...register("chef")}
            type="text"
            placeholder="Chef Name"
            className="block outline-0 bg-[#fcbfbc] border border-[#494139]  text-sm   w-[30vw] px-3 py-2.5 shadow-xs ml-10 mt-2 rounded-2xl  text-center"
          />
          {/* <small className="text-red-500 p-2">This is how the error is shown</small> */}
          <textarea
            {...register("description")}
            type="text"
            placeholder="Description"
            className="block outline-0 bg-[#fcbfbc] border border-[#494139]  text-sm   w-[30vw] px-3 py-2.5 shadow-xs ml-10 mt-2 rounded-2xl  text-center"
          />
          {/* <small className="text-red-500 p-2">This is how the error is shown</small> */}
          <textarea
            {...register("ingredients")}
            type="text"
            placeholder="Write ingredients separated by comma"
            className="block outline-0 bg-[#fcbfbc] border border-[#494139]  text-sm   w-[30vw] px-3 py-2.5 shadow-xs ml-10 mt-2 rounded-2xl  text-center"
          />
          {/* <small className="text-red-500 p-2">This is how the error is shown</small> */}

          <select
            {...register("category")}
            type="text"
            className="block outline-0 bg-[#fcbfbc] border border-[#494139]  text-sm   w-[30vw] px-3 py-2.5 shadow-xs ml-10 mt-2 rounded-2xl  text-center"
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="supper">Supper</option>
            <option value="dinner">Dinner</option>
          </select>
          {/* <small className="text-red-500 p-2">This is how the error is shown</small> */}
          <button className="block outline-0 bg-[#7edc75]  border border-[#494139]  text-sm   w-[20vw] px-3 py-2.5 shadow-xs ml-28 mt-2 rounded-2xl  text-center ">
            Update Recipe
          </button>
          <button
            onClick={deleteHandler}
            className="block outline-0 bg-red-500 border border-[#494139]  text-sm   w-[20vw] px-3 py-2.5 shadow-xs ml-28 mt-2 rounded-2xl mb-3 text-center"
            type="button"
          >
            Delete Recipe
          </button>
        </form>
      </div>
    </div>
  ) : (
    "Loading"
  );
};

export default SingleRecipe;
