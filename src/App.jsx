import Nav from "./components/Nav"
import Mainroute from "./routes/Mainroute"

const App = () => {
  return (
    <div className="bg-[#FEEFDF] w-screen h-screen text-black py-10 px-[10%] font-[Helvetica_Now_display]">
      <Nav/>
      <Mainroute/>
    </div>
  )
}

export default App
