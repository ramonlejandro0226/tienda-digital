<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
=======
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
>>>>>>> dev
import { Login } from "./pages/login/Login";
import { Signup } from "./pages/signup/Signup";
import Navbar from "./components/navbar/Navbar";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import { ProductList } from "./pages/product-list/ProductList";

function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <main className="container px-8 py-4 mx-auto">
          <Outlet />
        </main>
      </>
    );
  };
>>>>>>> dev

  const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    const token = localStorage.getItem("token");
    if (!token) {
      return <Navigate to="/" replace />;
    }
    return children;
  };

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
      element: (
        <PrivateRoute>
          <Layout />
        </PrivateRoute>
      ),
      children: [
        {
          path: "/main",
<<<<<<< HEAD
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
=======
          element: <Home />,
        },
        {
          path: "/main/account",
          element: <Profile />,
        },
        {
          path: "/main/ProductList",
          element: <ProductList />,
        },
      ],
    },
    {
      path: "*",
      element: (
        <>
          {" "}
          <span>404</span>
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
>>>>>>> dev
