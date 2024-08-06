import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/App.css";
import Dashboard from "./pages/Dashboard";
import Applayout from "./general/Applayout";
import NotFound from "./pages/NotFound";
import HotelDetails from "./pages/HotelDetails";
import RoomDetails from "./pages/RoomDetails";
import SearchResults from "./pages/SearchResults";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ConfirmAccount from "./pages/ConfirmAccount";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      children: [
        { path: "/", element: <Dashboard /> },
        {
          path: "/HotelDetails",
          element: <HotelDetails />,
        },
        {
          path: "roomDetails",
          element: <RoomDetails />,
        },
        {
          path: "searchResult",
          element: <SearchResults />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/ConfirmAccount",
          element: <ConfirmAccount />,
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
