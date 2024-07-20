import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/App.css";
// import Applayout from "./ui/Applayout";
import Dashboard from "./pages/Home/Dashboard";
import Applayout from "./general/Applayout";

// import Home from "./pages/Home/home";
// import Properties from "./pages/Properties";
// import Attraction from "./pages/Attraction";
// import Popular from "./pages/Popular";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      children: [{ path: "/", element: <Dashboard /> }],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
