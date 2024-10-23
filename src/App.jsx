
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";

import Login from "./components/Login";
import Callback from "./components/Callback";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/callback",
    element:<Callback/>
  },{
    path:"/login",
    element:<Login/>
  }

])

function App(){
  return(
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
export default App;