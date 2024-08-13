import PropTypes from "prop-types";
import { Modal, Box, Text, Badge } from "@mantine/core";

const BookingDetailsModal = ({ opened, onClose, booking }) => {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Booking Details"
      centered
      size="md"
    >
      {booking && (
        <Box>
          <Text weight={600}>{booking.hotelName}</Text>
          <Text size="sm" color="dimmed">
            {booking.location}
          </Text>
          <Text mt="md" size="sm">
            Check-in: {booking.checkIn}
          </Text>
          <Text size="sm">Check-out: {booking.checkOut}</Text>
          <Text mt="sm" size="sm" weight={600} color="blue">
            Total Price: {booking.totalPrice}
          </Text>
          <Badge
            color={booking.status === "Upcoming" ? "green" : "gray"}
            mt="sm"
          >
            {booking.status}
          </Badge>
        </Box>
      )}
    </Modal>
  );
};

BookingDetailsModal.propTypes = {
  opened: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  booking: PropTypes.shape({
    hotelName: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    checkIn: PropTypes.string.isRequired,
    checkOut: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }),
};

export default BookingDetailsModal;
