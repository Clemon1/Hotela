import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/App.css";
// import Applayout from "./ui/Applayout";
import Dashboard from "./pages/Dashboard";
import Applayout from "./general/Applayout";
import Login from "./modals/Login";

// import Home from "./pages/Home/home";
// import Properties from "./pages/Properties";
// import Attraction from "./pages/Attraction";
// import Popular from "./pages/Popular";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      children: [
        { path: "/", element: <Dashboard /> },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
