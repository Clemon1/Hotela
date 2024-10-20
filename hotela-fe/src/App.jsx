import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/App.css";
import Applayout from "./general/Applayout";
import Loading from "./components/loader/loader";
const NotFound = lazy(() => import("./pages/404/NotFound"));
const Login = lazy(() => import("./pages/auth/Login"));
const SignUp = lazy(() => import("./pages/auth/SignUp"));
const ConfirmAccount = lazy(() => import("./pages/auth/ConfirmAccount"));
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/auth/ResetPassword"));
const Profile = lazy(() => import("./pages/general/Profile"));
const Dashboard = lazy(() => import("./pages/general/Dashboard"));
const RoomDetails = lazy(() => import("./pages/rooms/RoomDetails"));
const SearchResults = lazy(() => import("./pages/hotel/SearchResults"));
const HotelDetails = lazy(() => import("./pages/hotel/HotelDetails"));
const ResetPasswordOTP = lazy(() => import("./pages/auth/ResetPasswordOTP"));
const BookingHistory = lazy(() => import("./pages/rooms/BookingHistory"));
const Favourite = lazy(() => import("./pages/hotel/Favourite"));
const Map = lazy(() => import("./pages/hotel/Map"));
const SuccessPayment = lazy(() => import("./pages/paymentStatus/success"));
const CancelledPayment = lazy(() => import("./pages/paymentStatus/cancelled"));

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
          path: "/roomDetails",
          element: <RoomDetails />,
        },
        {
          path: "searchResult",
          element: <SearchResults />,
        },
        {
          path: "profile",
          element: <Profile />,
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
          path: "/forgotPassword",
          element: <ForgotPassword />,
        },
        {
          path: "/resetPassword/:id",
          element: <ResetPassword />,
        },
        {
          path: "/ResetPasswordOTP",
          element: <ResetPasswordOTP />,
        },
        {
          path: "/BookingHistory",
          element: <BookingHistory />,
        },
        {
          path: "/ConfirmAccount",
          element: <ConfirmAccount />,
        },
        {
          path: "/Favourite",
          element: <Favourite />,
        },
        {
          path: "/Map",
          element: <Map />,
        },
        {
          path: "/booking-success",
          element: <SuccessPayment />,
        },
        {
          path: "/booking-cancelled",
          element: <CancelledPayment />,
        },

        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />;
    </Suspense>
  );
}

export default App;
