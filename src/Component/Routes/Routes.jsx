import {
    createBrowserRouter,
  } from "react-router-dom";
import Roots from "../Roots/Roots";
import Home from "../Pages/Homepage/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Allblogs from "../Pages/Allblogs/Allblogs";
import Addblog from "../Pages/Addblog/Addblog";
import Updateblog from "../Pages/UpdateBlog/Updateblog";
import Featuredblog from "../Pages/Featuredblog/Featuredblog";
import Wishlist from "../Pages/Wishlist/Wishlist";
import Blogdetails from "../Pages/Blogdetails/Blogdetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/allblogs',
            element:<Allblogs></Allblogs>
        },
        {
          path:'/addblog',
          element:<Addblog></Addblog>
      },
      {
        path:'/update/:id',
        element:<Updateblog></Updateblog>,
        loader:({params})=>fetch(`http://localhost:5000/allblogs/${params.id}`)

    },
    {
      path:'/featured',
      element:<Featuredblog></Featuredblog>,
      loader:()=>fetch('http://localhost:5000/featuredblogs')
  },
  {
    path:'/wishlist',
    element:<Wishlist></Wishlist>
},
{
  path:'/blogdetails/:id',
  element:<Blogdetails></Blogdetails>,
  loader:({params})=>fetch(`http://localhost:5000/allblogs/${params.id}`)
},


      ]
    },
  ]);

  export default router;