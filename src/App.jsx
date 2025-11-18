import MainRoutes from "./routes/MainRoutes"
 import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className=" w-full h-full  ">
      <Navbar />
      <MainRoutes />
    </div>
  )
}

export default App