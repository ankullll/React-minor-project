import Nav from "./components/Nav"
import Mainroute from "./routes/Mainroute"

const App = () => {
  return (
    <div className="bg-gray-800 w-screen h-screen text-white py-10 px-[10%]">
      <Nav/>
      <Mainroute/>
    </div>
  )
}

export default App
