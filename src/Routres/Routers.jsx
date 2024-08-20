import { createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About/About";
import ErroPage from "../Pages/ErroPage/ErroPage";
import History from "../Pages/History/History";
import OriginDetails from "../Pages/About/OriginDetails/OriginDetails";
import BottleDetails from "../Pages/About/BottleDetails/BottleDetails";
import SusatainDetails from "../Pages/SusatainDetails/SusatainDetails";
import Shop from "../Pages/Shop/Shop";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";

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
        },
        {
          path:'susatainDetails',
          element:<SusatainDetails></SusatainDetails>
        },
        {
         path:'shop/:category',
         element:<Shop></Shop> 
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        }
      ]
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'cart',
          element:<Cart></Cart>
        }
      ]
    }
  ]);

