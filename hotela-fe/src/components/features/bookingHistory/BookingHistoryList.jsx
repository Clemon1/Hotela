import PropTypes from "prop-types";
import {
  Badge,
  Box,
  Card,
  Flex,
  Image,
  Select,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import BookingDetailsModal from "./BookingDetailsModal";

function BookingHistoryList({ bookings }) {
  const [opened, setOpened] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedBooking, setSelectedBooking] = useState(null);
  const isMobile = useMediaQuery("(max-width: 500px)");

  const openModal = (booking) => {
    setSelectedBooking(booking);
    setOpened(true);
  };

  const filteredBookings =
    statusFilter === "All"
      ? bookings
      : bookings.filter((booking) => booking.status === statusFilter);

  return (
    <Box w="100%" px={isMobile ? "sm" : "lg"}>
      <Title order={2} mt="md" mb="lg">
        Booking History
      </Title>

      <Select
        value={statusFilter}
        onChange={(value) => setStatusFilter(value)}
        data={["All", "Ongoing", "Upcoming", "Completed"]}
        label="Filter by status"
        placeholder="Select status"
        size="md"
        style={{ marginBottom: 20 }}
        fullWidth={isMobile}
        w={isMobile ? "100%" : "200px"}
        allowDeselect={false}
      />

      {filteredBookings.map((booking, i) => (
        <Flex key={i} w={"100%"} px={!isMobile && 30}>
          <Card
            shadow="sm"
            // padding="lg"
            p={isMobile && 0}
            radius="md"
            mb="lg"
            key={booking.id}
            w={"100%"}
            withBorder
            onClick={() => openModal(booking)}
            style={{ cursor: "pointer" }} // Make the card clickable
          >
            <Flex
              direction={isMobile ? "column" : "row"}
              align="center"
              h={isMobile && 300}
            >
              <Image
                src={booking.image}
                w={isMobile ? "100%" : 100}
                h={isMobile ? "60%" : 100}
                alt={booking.hotelName}
                radius="md"
                mr={!isMobile && 20}
              />
              <Flex
                direction={isMobile && "row"}
                align="center"
                justify="space-between"
                w={"100%"}
                h={isMobile && "40%"}
                px={isMobile && 10}
              >
                <Flex direction="column" style={{ flex: 1 }}>
                  <Text weight={600} size={isMobile ? "md" : "lg"}>
                    {booking.hotelName}
                  </Text>
                  <Text c="dimmed" size={isMobile ? "sm" : "md"}>
                    {booking.location}
                  </Text>
                  <Text c="dimmed" size="sm">
                    {booking.checkIn} - {booking.checkOut}
                  </Text>
                  <Badge
                    color={
                      booking.status === "Upcoming"
                        ? "blue"
                        : booking.status === "Completed"
                        ? "green"
                        : "gray"
                    }
                    mt="sm"
                  >
                    {booking.status}
                  </Badge>
                </Flex>
                <Flex
                  direction="column"
                  align="flex-end"
                  mt={isMobile ? "md" : 0}
                >
                  <Text size="xl" fw={600} c="blue">
                    {booking.totalPrice}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Card>
        </Flex>
      ))}

      <BookingDetailsModal
        opened={opened}
        onClose={() => setOpened(false)}
        booking={selectedBooking}
      />
    </Box>
  );
}

BookingHistoryList.propTypes = {
  bookings: PropTypes.object.isRequired,
};

export default BookingHistoryList;
