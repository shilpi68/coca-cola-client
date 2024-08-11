import { createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About/About";
import ErroPage from "../Pages/ErroPage/ErroPage";
import History from "../Pages/History/History";
import OriginDetails from "../Pages/About/OriginDetails/OriginDetails";
import BottleDetails from "../Pages/About/BottleDetails/BottleDetails";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErroPage></ErroPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:'about',
          element:<About></About>
        },
        {
          path:'history',
          element:<History></History>,
        },
        {
          path:'originDetails',
          element:<OriginDetails></OriginDetails>
        },
        {
          path:'bottleDetails',
          element:<BottleDetails></BottleDetails>
        }
      ]
    },
  ]);

