import { Carousel } from "@mantine/carousel";
import {
  Box,
  Group,
  Stack,
  Text,
  Title,
  Image,
  Button,
  Paper,
  SimpleGrid,
  Divider,
  Badge,
} from "@mantine/core";
import {
  FaBed,
  FaArrowsAltV,
  FaUsers,
  FaMoneyBillWave,
  FaRegCalendarAlt,
  FaRegCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

// Sample data for rooms
const rooms = [
  {
    id: 1,
    name: "Standard Room",
    size: "25 sq m",
    sleeps: 2,
    bed: "1 Double Bed",
    price: 45,
    originalPrice: 50,
    nights: 2,
    taxesFees: "includes taxes & fees",
    priceDetails: "€22 per night",
    availability: "We have 4 left",
    image: "https://via.placeholder.com/400x300",
  },
  {
    id: 2,
    name: "Deluxe Room",
    size: "30 sq m",
    sleeps: 2,
    bed: "1 King Bed",
    price: 60,
    originalPrice: 70,
    nights: 2,
    taxesFees: "includes taxes & fees",
    priceDetails: "€30 per night",
    availability: "We have 3 left",
    image: "https://via.placeholder.com/400x300",
  },
  {
    id: 3,
    name: "Family Room",
    size: "40 sq m",
    sleeps: 4,
    bed: "2 Double Beds",
    price: 80,
    originalPrice: 90,
    nights: 2,
    taxesFees: "includes taxes & fees",
    priceDetails: "€40 per night",
    availability: "We have 2 left",
    image: "https://via.placeholder.com/400x300",
  },
];

function RoomCard({ room }) {
  return (
    <Paper shadow="xs" p="md" radius="md">
      <Box mb="md" style={{ position: "relative" }}>
        {/* <Image src={room.image} alt={room.name} radius="md" height={300} />
         */}
        <Carousel withIndicators height={200} loop>
          <Carousel.Slide>
            <Image src={room.image} alt={room.name} radius="md" height={300} />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image src={room.image} alt={room.name} radius="md" height={300} />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image src={room.image} alt={room.name} radius="md" height={300} />
          </Carousel.Slide>
          {/* ...other slides */}
        </Carousel>
        <Badge
          color="red"
          variant="filled"
          style={{ position: "absolute", top: 10, right: 10 }}
          size="lg"
        >
          {(
            ((room.originalPrice - room.price) / room.originalPrice) *
            100
          ).toFixed(0)}
          % OFF
        </Badge>
      </Box>
      <Stack gap={10}>
        <Title order={3} c={"#000814"}>
          {room.name}
        </Title>
        <Text fz="sm" c={"#000814"}>
          <FaArrowsAltV /> {room.size}
        </Text>
        <Text fz="sm" c={"#000814"}>
          <FaUsers /> Sleeps {room.sleeps}
        </Text>
        <Text fz="sm" c={"#000814"}>
          <FaBed /> {room.bed}
        </Text>

        <Group align="center">
          <Text fz="40" weight={700} color="green">
            €{room.price}
          </Text>
          <Text fz="sm" c="gray" style={{ textDecoration: "line-through" }}>
            €{room.originalPrice}
          </Text>
        </Group>

        <Text fz="sm" c={"#000814"}>
          {room.nights} Nights
        </Text>
        <Text fz="sm" c={"#000814"}>
          {room.priceDetails}
        </Text>

        <Text fz="sm" c={"#000814"}>
          {room.taxesFees}
        </Text>
        <Text fz="xs" weight={500} color="red">
          {room.availability}
        </Text>
        <Button fullWidth color="blue" mt="md" size="md" radius="xl" fz={15}>
          Reserve
        </Button>
      </Stack>
    </Paper>
  );
}

function HostelRooms() {
  return (
    <Box mt={20} px={20}>
      <Title order={2} mb={20} c={"#000814"}>
        Hostel Rooms
      </Title>
      <SimpleGrid
        cols={3}
        spacing="lg"
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: "md" },
          { maxWidth: 755, cols: 1, spacing: "sm" },
        ]}
      >
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default HostelRooms;