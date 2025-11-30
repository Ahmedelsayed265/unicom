import { createBrowserRouter } from "react-router";
import ChooseAccountType from "@/routes/ChooseAccountType";
import Layout from "@/Layout";
import Home from "@/routes/Home";
import Login from "@/routes/Login";
import About from "@/routes/About";
import Terms from "@/routes/Terms";
import Privacy from "@/routes/Privacy";
import CreateAccount from "@/routes/CreateAccount";
import Success from "@/features/auth/register/Success";
import Confirm from "@/features/auth/register/Confirm";
import Documents from "@/features/auth/register/Documents";
import EmployRegister from "@/components/register/EmployRegister";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "choose-account",
        element: <ChooseAccountType />,
      },
      {
        path: "create-seller-1",
        element: <CreateAccount />,
      },
      {
        path: "create-seller-2",
        element: <Documents />,
      },
      {
        path: "create-seller-3",
        element: <Confirm />,
      },
      {
        path: "create-seller-success",
        element: <Success />,
      },
      {
        path: "register",
        element: <EmployRegister />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "terms",
        element: <Terms />,
      },
      {
        path: "privacy",
        element: <Privacy />,
      },
    ],
  },
]);
