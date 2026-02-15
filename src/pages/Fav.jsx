import Recipecard from "../components/Recipecard"

const Fav = () => {
 let favdata = JSON.parse(localStorage.getItem("fav") ||"[]")
 favdata =favdata.filter((e)=> e !==null
 )


  const renderRecipe = favdata.map((e)=>{
    return <Recipecard recipe={e} key={e.id}/>
     
})
  return (
    <div className="flex flex-wrap">{ favdata?.length > 0 ? renderRecipe : <h1 className="text-7xl text-[#be3740] text-center mt-35 ml-50">No Favourites Found !</h1> }</div>
    
  )
}

export default Fav
