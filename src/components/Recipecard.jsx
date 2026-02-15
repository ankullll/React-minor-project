import { Link } from "react-router-dom";

const Recipecard = (props) => {
  const { chef, title, description, image, id } = props.recipe;
  return (
    <Link
      to={`/recipes/details/${id}`}
      className="w-[17vw] rounded-xl overflow-hidden  block mb-5 hover:scale-101 duration-100 ml-10 mt-5 bg-[#be3740] p-2 -mr-3  "
    >
      <img
        className="w-full h-[14vw] object-cover rounded-xl "
        src={image}
        alt=""
      />
      <div className="bg-[#fcbfbc] p-1 rounded-xl mt-1 h-47 mb-1 "> 
        <h1 className="mt-2 font-black px-2 text-xl">{title}</h1>
        <small className="px-2 text-red-400 text-[1.3vw]"> {chef}</small>
        <p className="px-2 mb-2">
          {description.slice(0, 100)}...{" "}
          <small className="text-blue-600">More</small>
        </p>
      </div>
    </Link>
  );
};

export default Recipecard;
