import { useEffect } from "react";
import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  const getdata = async () => {
    try {
      const response = await axios.get("/products");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const order = ()=>{
    navigate("/recipes")
  }

  useEffect(() => {
    getdata();
    return () => {};
  }, []);

  return (
    <div className=" h-[85%] w-[95%] ml-5  flex relative">
      <img src="/assets/flower-japan.svg" alt="" className="h-[4.5vh] w-[3.5vw] absolute top-14 left-20 " />
      <img src="/assets/leaf-1.svg" alt="" className="h-[4.5vh] w-[3.5vw] absolute top-24 left-120 " />
      <img src="/assets/leaf-1.svg" alt="" className="h-[4vh] w-[3vw] absolute top-104 left-25 " />
      <img src="/assets/leaf-2.svg" alt="" className="h-[4vh] w-[3vw] absolute top-104 left-255 " />

      <img src="/assets/flower-japan.svg" alt="" className="h-[4.5vh] w-[3.5vw] absolute -top-3   left-243 " />
       
      <img src="/assets/flower-japan.svg" alt="" className="h-[4.5vh] w-[3.5vw] absolute top-82   left-50 " />
      
      <img src="/assets/flower-japan.svg" alt="" className="h-[4.5vh] w-[3.5vw] absolute top-96   left-144 " />

      


      <div className="left">
        <h1 className="text-6xl font-[Playfair] mt-25 pl-14 tracking-wide ">
          Enjoy Delicious <br /> The{" "}
          <span className="text-red-600">Japanese Food</span>
        </h1>
        <p className="text-[#918273] leading-4.5 pl-16 mt-4 tracking-wider">
          We serve the finest Japanese cuisine. Prepared with <br />carefully selected natural ingredients by a professional <br />chef, guaranteeing a high-quality flavour . We hope you <br />enjoy your meal.
        </p>
        <button onClick={order} className="text-[#FEEFDF] bg-[#BC3740] px-3 py-2 rounded ml-16 mt-5 hover:scale-105">See More</button>
      </div>

      <div className="right bg-[#BC3740] h-full w-[33vw] rounded-[50%] ml-15 relative">
        <img
          src="/assets/home-img-1.png"
          alt=""
          className="h-[35vh] w-[25vw] absolute top-46 -left-14"
        />
        <img src="/assets/home-img-2.png" alt="" className="h-[22vh] w-[12vw] absolute top-6 left-11"/>
        <img src="/assets/home-img-3.png" alt="" className="h-[14vh] w-[10vw] absolute  top-38 left-65"/>
        <img src="/assets/home-img-4.png" alt="" className="h-[10vh] w-[7vw] absolute  top-18 left-70"/>
        <img src="/assets/home-img-5.png" alt="" className="h-[8.5vh] w-[6vw] absolute  top-67 left-88"/>
        <img src="/assets/home-img-6.png" alt="" className="h-[18vh] w-[20vw] absolute  top-89 left-30"/>
      </div>
    </div>
  );
};

export default Home;
