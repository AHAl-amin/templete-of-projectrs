
import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import { LogIn } from "lucide-react";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";



 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
          path:"/signup",
          element:<SignUp></SignUp>
        }
      ]
    },
  ]);