import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles.css";

import Home from "./screens/Home";
import Weather from "./screens/Weather";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/previsao",
      element: <Weather />
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
