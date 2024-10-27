import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { useState } from 'react';
import { Login } from './pages/login/Login';
import { Signup } from './pages/signup/Signup';
import Navbar from "./components/navbar/Navbar";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import { ProductList } from "./pages/home/product-list/ProductList";
import { getphotos } from "./utils/getphotos";


function App() {



  const [Products, setProducts] = useState('')

  console.log(Products)
  getphotos('perro')

  const onAddproduct = (newproducts: string) => {
    setProducts(newproducts)
  }

  const Layout = () => {
    return (
      <>
        <Navbar onAddproduct={onAddproduct } />
        <main className="container mx-auto px-8 py-4">
          <Outlet />
        </main>
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/main",
      element: <Layout />,
      children: [
        {
          path: "/main",
          element: <Home />
        },
        {
          path: "/main/account",
          element: <Profile />

        },
        {
          path: "/main/ProductList",
          element: <ProductList product={Products} />

        }
      ]
    },
    {
      path: "*",
      element: <> <span>404</span></>
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App