import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/login";

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
        element: <div>dsadasdasdasdas</div>,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
    children: [],
  },
]);
