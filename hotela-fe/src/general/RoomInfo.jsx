import { Carousel } from "@mantine/carousel";
import {
  Box,
  Image,
  Text,
  Title,
  Divider,
  Paper,
  Stack,
  Group,
} from "@mantine/core";
import hotelDetails1 from "../assets/hotelDetails1.jpg";

function RoomInfo() {
  const numberOfNights = 3;
  const pricePerNight = 200;
  const tax = 20;
  const breakfastCharge = 10;
  const totalCharge = (pricePerNight + tax + breakfastCharge) * numberOfNights;

  return (
    <Paper
      shadow="md"
      radius="md"
      p="lg"
      style={{
        maxWidth: 800,
        margin: "auto",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Carousel
        height={300}
        loop
        styles={{
          root: {
            borderRadius: "20px",
            overflow: "hidden",
          },
        }}
        controlSize={40}
        withIndicators
      >
        <Carousel.Slide>
          <Image
            src={hotelDetails1}
            alt="Hotel Detail 1"
            radius="md"
            height={300}
            style={{ borderRadius: "8px" }}
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            src={hotelDetails1}
            alt="Hotel Detail 1"
            radius="md"
            height={300}
            style={{ borderRadius: "8px" }}
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            src={hotelDetails1}
            alt="Hotel Detail 1"
            radius="md"
            height={300}
            style={{ borderRadius: "8px" }}
          />
        </Carousel.Slide>
      </Carousel>

      <Box mt="md">
        <Title order={3} mb="xs" c={"#000814"}>
          Deluxe Room
        </Title>
        <Text size="sm" c="dimmed">
          Type: Deluxe
        </Text>
        <Text size="sm" c="dimmed">
          Check-in: 2:00 PM
        </Text>
        <Text size="sm" c="dimmed">
          Check-out: 11:00 AM
        </Text>
        <Divider my="sm" />
        <Group justify="space-between" mt="sm" c={"#000814"}>
          <Text size="sm">
            <strong>Number of nights:</strong> {numberOfNights}
          </Text>
          <Text size="sm">
            <strong>Charge per night:</strong> ${pricePerNight}
          </Text>
        </Group>
        <Text size="sm" mt="sm" c={"#000814"}>
          <strong>Tax:</strong> ${tax}
        </Text>
        <Text size="sm" mt="sm" c={"#000814"}>
          <strong>Breakfast:</strong> ${breakfastCharge}
        </Text>
        <Divider my="sm" />
        <Text size="lg" c={"#000814"}>
          <strong>Total charge:</strong> ${totalCharge}
        </Text>
      </Box>
    </Paper>
  );
}

export default RoomInfo;
