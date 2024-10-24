import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Login } from './pages/login/Login';
import { Signup } from './pages/signup/Signup';


function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/signup",
      element:<Signup/>,
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
