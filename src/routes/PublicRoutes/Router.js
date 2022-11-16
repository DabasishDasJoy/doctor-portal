import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import Main from "../../layouts/Main";
import Appoinment from "../../pages/Appoinment/Appoinment/Appoinment";
import MyAppoinments from "../../pages/Dashboard/MyAppointments/MyAppoinments";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <SignUp></SignUp>,
      },
      {
        path: "/appoinment",
        element: <Appoinment></Appoinment>,
      },
      // {
      //   path: "/dashboard",
      //   element: (
      //     <PrivateRoutes>
      //       <Dashboard></Dashboard>
      //     </PrivateRoutes>
      //   ),
      // },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout></DashboardLayout>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyAppoinments />,
      },
    ],
  },
]);
