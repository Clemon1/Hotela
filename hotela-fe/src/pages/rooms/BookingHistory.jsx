import { Box } from "@mantine/core";

import EmptyBooking from "../../components/features/bookingHistory/EmptyBooking";
import BookingHistoryList from "../../components/features/bookingHistory/BookingHistoryList";

const bookings = [
  {
    id: "1",
    hotelName: "Hotel California",
    location: "Los Angeles, CA",
    checkIn: "Jan 1, 2024",
    checkOut: "Jan 7, 2024",
    totalPrice: "£500",
    status: "Upcoming",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    hotelName: "Grand Hotel",
    location: "New York, NY",
    checkIn: "Aug 10, 2024",
    checkOut: "Aug 11, 2024",
    totalPrice: "£300",
    status: "Completed",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "3",
    hotelName: "Grand Hotel",
    location: "New York, NY",
    checkIn: "Aug 10, 2024",
    checkOut: "Aug 11, 2024",
    totalPrice: "£300",
    status: "Ongoing",
    image: "https://via.placeholder.com/150",
  },
];

const BookingHistory = () => {
  return (
    <Box w={"100%"}>
      {bookings.length === 0 ? (
        <EmptyBooking />
      ) : (
        <BookingHistoryList bookings={bookings} />
      )}
    </Box>
  );
};

export default BookingHistory;
