import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/HomePage/Home/Home";
import Dashboard from "../Layout/Dashboard";
import PaymentHistory from "../Pages/Dahsboard/PaymentHistory/PaymentHistory";
import WorkSheet from "../Pages/Dahsboard/Worksheet/Worksheet";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ]
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "payHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "worksheet",
        element: <WorkSheet></WorkSheet>
      }
    ]
  }
]);
