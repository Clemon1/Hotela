import { useState } from "react";
import {
  Box,
  Group,
  Stack,
  Text,
  Title,
  Avatar,
  Rating,
  Paper,
  Divider,
  Pagination,
  Flex,
  Button,
} from "@mantine/core";
import { IoStar, IoStarOutline } from "react-icons/io5";
import PropTypes from "prop-types";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import AddReviewModal from "./AddReviewModal";

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
            <Text size="xs" c="gray">
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

ReviewCard.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

function chunk(array, size) {
  if (!array.length) {
    return [];
  }
  const head = array.slice(0, size);
  const tail = array.slice(size);
  return [head, ...chunk(tail, size)];
}

const data = chunk(reviews, 3);

function Reviews() {
  const [activePage, SetActivePage] = useState(1);
  const [isAddReviewModalOpen, { open, close }] = useDisclosure(false);
  console.log(isAddReviewModalOpen);

  const isMobile = useMediaQuery("(max-width: 500px)");

  return (
    <Box
      mt={20}
      px={{ base: 10, sm: 20 }}
      py={30}
      style={{
        backgroundColor: "#f8f9fa",
        borderRadius: "10px",
      }}
    >
      <Group align="center" mb={20} justify="space-between">
        <Title order={2} fz={{ base: 20, sm: 30 }} style={{ color: "#2c3e50" }}>
          Customer Reviews
        </Title>

        <Button onClick={open} size={isMobile ? "xs" : "md"} radius={"xl"}>
          Leave a Review
        </Button>
      </Group>
      <Divider my="lg" />
      {data[activePage - 1].map((review, index) => (
        <ReviewCard key={index} {...review} />
      ))}
      <Flex align={"center"} justify={"center"}>
        <Pagination
          total={data.length}
          value={activePage}
          onChange={SetActivePage}
          mt="sm"
        />
      </Flex>

      <AddReviewModal opened={isAddReviewModalOpen} onClose={close} />
    </Box>
  );
}

export default Reviews;
