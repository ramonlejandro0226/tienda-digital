import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { Login } from './pages/login/Login';
import { Signup } from './pages/signup/Signup';
import Navbar from "./components/navbar/Navbar";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";


function App() {

  const Layout = () => {
    return (
      <>
        <Navbar />
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