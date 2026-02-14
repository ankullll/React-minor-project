import Recipecard from "../components/Recipecard"

const Fav = () => {
 let favdata = JSON.parse(localStorage.getItem("fav") ||"[]")
 favdata =favdata.filter((e)=> e !==null
 )


  const renderRecipe = favdata.map((e)=>{
    return <Recipecard recipe={e} key={e.id}/>
     
})
  return (
    <div className="flex flex-wrap">{ favdata?.length > 0 ? renderRecipe : "No Favourite Recipe found"}</div>
    
  )
}

export default Fav
