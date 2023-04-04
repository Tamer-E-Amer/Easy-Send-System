import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//  components
import { Navbar, Footer } from "./components";
// Pages
import {
  Home,
  Login,
  Dashboard,
  Register,
  ProblemRegister,
  ProblemDetails,
  ChangePassword,
  Messages,
} from "./pages";
const App = () => {
  const LayOut = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/dashboard/problemRegister",
          element: <ProblemRegister />,
        },
        {
          path: "/dashboard/problemDetails/:id",
          element: <ProblemDetails />,
        },
        {
          path: "/dashboard/changePassword",
          element: <ChangePassword />,
        },
        {
          path: "/dashboard/messages",
          element: <Messages />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
