import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/HomePage/Home/Home";
import Dashboard from "../Layout/Dashboard";
import PaymentHistory from "../Pages/Dahsboard/PaymentHistory/PaymentHistory";
import WorkSheet from "../Pages/Dahsboard/Worksheet/Worksheet";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AllEmployee from "../Pages/Dahsboard/AllEmployee";
import Team from "../Pages/Team/Team";
import AllEmployeeForHR from "../Pages/Dahsboard/AllEmployeeForHR/AllEmployeeForHR";
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
      {
        path: "/contact",
        element: <Team></Team>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "payHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "worksheet",
        element: <WorkSheet></WorkSheet>,
      },
      {
        path: "allemployee",
        element: <AllEmployee></AllEmployee>,
      },
      {
        path: "allemployeeHR",
        element: <AllEmployeeForHR></AllEmployeeForHR>,
      },
    ],
  },
]);
