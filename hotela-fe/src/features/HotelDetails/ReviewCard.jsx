import { useState } from "react";
import {
  Box,
  Button,
  Group,
  Stack,
  Text,
  Title,
  Avatar,
  Rating,
  Paper,
  Divider,
} from "@mantine/core";
import { IoStar, IoStarOutline } from "react-icons/io5";

// Sample data for reviews
const reviews = [
  {
    name: "John Doe",
    date: "March 5, 2024",
    rating: 4.5,
    comment:
      "Great hotel with excellent service. The rooms were clean and the staff was friendly. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Jane Smith",
    date: "February 20, 2024",
    rating: 4,
    comment:
      "Comfortable stay and good amenities. Breakfast could have been better.",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Alice Johnson",
    date: "January 10, 2024",
    rating: 5,
    comment:
      "Perfect experience! The location was convenient and the food was delicious.",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  // Additional sample reviews for demonstration
  {
    name: "Michael Brown",
    date: "December 25, 2023",
    rating: 3.5,
    comment: "Good hotel but room service was slow.",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Emily Davis",
    date: "November 15, 2023",
    rating: 4.8,
    comment: "Amazing stay, will definitely come back!",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

function ReviewCard({ name, date, rating, comment, avatar }) {
  return (
    <Paper
      shadow="xs"
      p="md"
      mb={20}
      style={{ backgroundColor: "#fff", borderRadius: "10px" }}
    >
      <Group align="flex-start">
        <Avatar src={avatar} alt={name} radius="xl" size="lg" />
        <Stack spacing={5} style={{ flexGrow: 1 }}>
          <Group position="apart" style={{ width: "100%" }}>
            <Text weight={500}>{name}</Text>
            <Text size="xs" color="gray">
              {date}
            </Text>
          </Group>
          <Rating
            value={rating}
            readOnly
            size="sm"
            icon={<IoStar />}
            emptyIcon={<IoStarOutline />}
          />
          <Text size="sm" mt={5} style={{ lineHeight: 1.5 }}>
            {comment}
          </Text>
        </Stack>
      </Group>
    </Paper>
  );
}

function Reviews() {
  const [showAll, setShowAll] = useState(false);
  const reviewsToShow = showAll ? reviews : reviews.slice(0, 3);

  return (
    <Box
      mt={20}
      px={20}
      py={30}
      style={{ backgroundColor: "#f8f9fa", borderRadius: "10px" }}
    >
      <Title order={2} mb={20} style={{ color: "#2c3e50" }}>
        Customer Reviews
      </Title>
      <Divider my="lg" />
      {reviewsToShow.map((review, index) => (
        <ReviewCard key={index} {...review} />
      ))}
      <Button
        fullWidth
        variant="outline"
        mt={20}
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? "Show Less" : "Show All Reviews"}
      </Button>
    </Box>
  );
}

export default Reviews;
