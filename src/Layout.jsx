import React from 'react'
import Login from './components/Login'
import Products from './components/Products'
// import Products from './components/Products'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Layout = () => {

   const LoginRouter = createBrowserRouter([
        {
          path: "/",
          element: <Login />,
        },
      ]);

    const  ProductPageRouter = createBrowserRouter([
        {
          path: "/Products",
          element: <Products />,
        },
      ]);


    const LoggedIn= localStorage.getItem("loggedin")
  return (
    <div>
      
       
        <RouterProvider
          router={ LoggedIn ?  ProductPageRouter : LoginRouter}
        />
      
    </div>
  )
}

export default Layout
