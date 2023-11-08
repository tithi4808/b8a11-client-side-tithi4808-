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
import PrivateRoute from "../Privateroute/Privateroute";

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
          element:<PrivateRoute><Addblog></Addblog></PrivateRoute>
      },
      {
        path:'/update/:id',
        element:<PrivateRoute><Updateblog></Updateblog></PrivateRoute>,
        loader:({params})=>fetch(`https://b8a11-server-side-tithi4808-r0k048sjd-tanya-sultanas-projects.vercel.app/allblogs/${params.id}`)

    },
    {
      path:'/featured',
      element:<Featuredblog></Featuredblog>,
  },
  {
    path:'/wishlist',
    element:<PrivateRoute><Wishlist></Wishlist></PrivateRoute>,
    loader:()=>fetch('https://b8a11-server-side-tithi4808-4wuh4agec-tanya-sultanas-projects.vercel.app/wishlist')
},
{
  path:'/blogdetails/:id',
  element:<PrivateRoute><Blogdetails></Blogdetails></PrivateRoute>,
  loader:({params})=>fetch(`https://b8a11-server-side-tithi4808-r0k048sjd-tanya-sultanas-projects.vercel.app/allblogs/${params.id}`)
},


      ]
    },
  ]);

  export default router;