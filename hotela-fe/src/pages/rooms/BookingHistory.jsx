import {
  Container,
  Grid,
  Card,
  Text,
  Badge,
  Button,
  Group,
  Modal,
  Pagination,
  TextInput,
  Select,
} from "@mantine/core";
import { useState } from "react";

function BookingHistory() {
  const [opened, setOpened] = useState(false);

  // Example booking data
  const bookings = [
    {
      id: "BKG12345",
      title: "Ocean View Villa",
      location: "Malibu, CA",
      date: "2024-08-01 to 2024-08-07",
      status: "Confirmed",
      thumbnail: "https://via.placeholder.com/150",
    },
    // Add more booking objects as needed...
  ];

  return (
    <Container>
      {/* Title and Filters */}
      <Group position="apart" mt="md" mb="md">
        <Text size="xl" weight={700}>
          Booking History
        </Text>
        <Group>
          <TextInput placeholder="Search by booking ID" />
          <Select
            placeholder="Filter by status"
            data={["All", "Confirmed", "Canceled", "Completed"]}
          />
        </Group>
      </Group>

      {/* Booking Cards */}
      <Grid>
        {bookings.map((booking) => (
          <Grid.Col span={12} key={booking.id}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Group position="apart">
                <Group>
                  <img
                    src={booking.thumbnail}
                    alt={booking.title}
                    width={100}
                  />
                  <div>
                    <Text weight={500}>{booking.title}</Text>
                    <Text size="sm" color="dimmed">
                      {booking.location}
                    </Text>
                    <Text size="sm" color="dimmed">
                      {booking.date}
                    </Text>
                  </div>
                </Group>
                <div>
                  <Badge
                    color={booking.status === "Confirmed" ? "green" : "red"}
                  >
                    {booking.status}
                  </Badge>
                </div>
              </Group>

              <Group position="right" mt="md">
                <Button
                  variant="light"
                  color="blue"
                  onClick={() => setOpened(true)}
                >
                  View Details
                </Button>
                <Button variant="outline" color="red">
                  Cancel Booking
                </Button>
              </Group>
            </Card>
          </Grid.Col>
        ))}
      </Grid>

      {/* Pagination */}
      <Group position="center" mt="lg">
        <Pagination total={10} />
      </Group>

      {/* Booking Details Modal */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Booking Details"
      >
        <Text>Details about the selected booking will appear here.</Text>
        {/* Add more detailed content here */}
      </Modal>
    </Container>
  );
}

export default BookingHistory;
