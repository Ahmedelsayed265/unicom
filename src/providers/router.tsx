import { createBrowserRouter } from "react-router";
import ChooseAccountType from "@/routes/ChooseAccountType";
import Layout from "@/Layout";
import Home from "@/routes/Home";
import Login from "@/routes/Login";
import About from "@/routes/About";
import Terms from "@/routes/Terms";
import Privacy from "@/routes/Privacy";
import CreateAccount from "@/routes/CreateAccount";

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
        path: "register-step2",
        element: <CreateAccount />,
      },
      {
        path: "choose-account",
        element: <ChooseAccountType />,
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
