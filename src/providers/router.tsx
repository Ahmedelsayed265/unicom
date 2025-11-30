import { createBrowserRouter } from "react-router";
import ChooseAccountType from "@/routes/ChooseAccountType";
import Documents from "@/features/auth/register/Documents";
import Success from "@/features/auth/register/Success";
import Confirm from "@/features/auth/register/Confirm";
import CreateAccount from "@/features/auth/register/CreateAccount";
import EmployRegister from "@/components/register/EmployRegister";
import Layout from "@/Layout";
import Home from "@/routes/Home";
import Login from "@/routes/Login";
import About from "@/routes/About";
import Terms from "@/routes/Terms";
import AuthGuard from "./AuthGaurd";
import Privacy from "@/routes/Privacy";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <AuthGuard>
            <Home />
          </AuthGuard>
        ),
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
