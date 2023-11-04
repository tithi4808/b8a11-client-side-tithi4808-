import {
    createBrowserRouter,
  } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <div className="text-5xl">Hello world!</div>,
    },
  ]);

  export default router;