import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/App.css";
import Dashboard from "./pages/Dashboard";
import Applayout from "./general/Applayout";
import NotFound from "./pages/NotFound";
import HotelDetail from "./pages/HotelDetails";
import RoomDetails from "./pages/RoomDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      children: [
        { path: "/", element: <Dashboard /> },
        {
          path: "/HotelDetails",
          element: <HotelDetail />,
        },
        {
          path: "roomDetails",
          element: <RoomDetails />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
