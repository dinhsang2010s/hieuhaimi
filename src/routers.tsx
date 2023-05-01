import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/login";
import { Category } from "./pages/Category";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/user",
        element: <div>dsadas</div>,
      },
      {
        path: "/category",
        element: <Category />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
    children: [],
  },
]);
