import { BrowserRouter } from "react-router-dom"
import RoutesContainer from "./routes/routes"


function App() {
  return (
    <>
      <BrowserRouter>
        <RoutesContainer />
      </BrowserRouter>
    </>
  )
}

export default App
