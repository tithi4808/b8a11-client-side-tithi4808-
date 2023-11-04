import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  
  RouterProvider,
} from "react-router-dom";
import router from './Component/Routes/Routes.jsx';
import Authprovider from './Component/Authprovider/Authprovider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider><RouterProvider router={router} /></Authprovider>
  </React.StrictMode>,
)
