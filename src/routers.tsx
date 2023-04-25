import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./components/pages/login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
  },
  {
    path: "login",
    element: <Login />,
    children: [],
  },
]);
