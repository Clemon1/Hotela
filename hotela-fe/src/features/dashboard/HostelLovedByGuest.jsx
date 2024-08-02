import {
  Box,
  Image,
  Stack,
  Text,
  Flex,
  useMantineTheme,
  Badge,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";
import dashBoardRoom1 from "../../assets/dashBoardRoom1.jpg";

const itemsData = [
  {
    id: 1,
    name: "Cozy Cottage",
    location: "Camden",
    price: "$90",
    image: dashBoardRoom1,
    reviews: [9, 8, 10, 7, 9],
    favourite: true,
  },
  {
    id: 2,
    name: "Elegant Estate",
    location: "Kensington",
    price: "$150",
    image: dashBoardRoom1,
    reviews: [9, 9, 8, 10, 8],
    favourite: false,
  },
  {
    id: 3,
    name: "Modern Apartment",
    location: "Chelsea",
    price: "$200",
    image: dashBoardRoom1,
    reviews: [10, 9, 8, 10, 9],
    favourite: false,
  },
  {
    id: 4,
    name: "Classic Villa",
    location: "Hampstead",
    price: "$250",
    image: dashBoardRoom1,
    reviews: [9, 9, 10, 9, 10],
    favourite: false,
  },
  {
    id: 5,
    name: "Beach House",
    location: "Brighton",
    price: "$180",
    image: dashBoardRoom1,
    reviews: [8, 8, 9, 8, 8],
    favourite: false,
  },
  {
    id: 6,
    name: "Country Inn",
    location: "Oxford",
    price: "$120",
    image: dashBoardRoom1,
    reviews: [7, 8, 7, 8, 7],
    favourite: false,
  },
  {
    id: 7,
    name: "Luxury Loft",
    location: "Mayfair",
    price: "$300",
    image: dashBoardRoom1,
    reviews: [10, 10, 10, 9, 10],
    favourite: false,
  },
  {
    id: 8,
    name: "Rustic Retreat",
    location: "Cotswolds",
    price: "$110",
    image: dashBoardRoom1,
    reviews: [7, 7, 8, 7, 8],
    favourite: false,
  },
  {
    id: 9,
    name: "Urban Studio",
    location: "Soho",
    price: "$130",
    image: dashBoardRoom1,
    reviews: [9, 8, 8, 9, 9],
    favourite: false,
  },
  {
    id: 10,
    name: "Historic Mansion",
    location: "Greenwich",
    price: "$220",
    image: dashBoardRoom1,
    reviews: [9, 9, 9, 8, 9],
    favourite: false,
  },
];

const getAverageRating = (reviews) => {
  const sum = reviews.reduce((a, b) => a + b, 0);
  return (sum / reviews.length).toFixed(1);
};

const getRatingCategory = (average) => {
  if (average >= 9) return "Wonderful";
  if (average >= 8) return "Very Good";
  if (average >= 7) return "Good";
  return "Bad";
};

function HostelLovedByGuest() {
  const [items, setItems] = useState(itemsData);
  const [animate, setAnimate] = useState(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const theme = useMantineTheme();

  const handleFavouriteClick = (id) => {
    setAnimate(id);
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, favourite: !item.favourite } : item
      )
    );
    setTimeout(() => setAnimate(null), 300);
  };

  return (
    <Box mt={6} mb={20}>
      <Text fw={600} c={"#000814"} fz="xl" mb="xs">
        Hostel Loved By Guests
      </Text>
      <Carousel
        height={"100%"}
        slideSize={isMobile ? "20%" : "25%"}
        slideGap="md"
        align="start"
        controlSize={40}
        controlsOffset="sm"
        pb={20}
        loop={true}
        withControls={!isMobile}
      >
        {items.map((item) => {
          const averageRating = getAverageRating(item.reviews);
          const ratingCategory = getRatingCategory(averageRating);
          return (
            <Carousel.Slide key={item.id}>
              <Stack
                w={280}
                h={"100%"}
                bd={2}
                style={{
                  boxShadow: theme.shadows.sm,
                  borderRadius: theme.radius.xl,
                  backgroundColor: theme.white,
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "transform 0.2s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Box h={"600%"} pos={"relative"}>
                  <Image src={item.image} height="" />
                  <Box
                    onClick={() => handleFavouriteClick(item.id)}
                    style={{
                      position: "absolute",
                      top: "20px",
                      right: "20px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "100%",
                      transition: "transform 0.3s ease",
                      transform:
                        animate === item.id ? "scale(1.3)" : "scale(1)",
                    }}
                    bg={"rgba(255, 255, 255, 0.5)"}
                    w={30}
                    h={30}
                  >
                    {item.favourite ? (
                      <FaHeart color="white" size={16} />
                    ) : (
                      <CiHeart color="white" size={16} />
                    )}
                  </Box>
                </Box>
                <Box p="sm">
                  <Flex justify="space-between" align="center" mb="xs">
                    <Badge color="#000814" radius="sm" size="md">
                      {averageRating}/10
                    </Badge>
                    <Text size="sm" weight={500} color="dimmed">
                      {ratingCategory} ({item.reviews.length} reviews)
                    </Text>
                  </Flex>
                  <Text size="lg" weight={700} color="dark">
                    {item.name}
                  </Text>
                  <Text size="sm" color="dimmed" mb="xs">
                    {item.location}
                  </Text>
                  <Text size="xl" weight={700} color="primary">
                    {item.price}
                  </Text>
                </Box>
              </Stack>
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </Box>
  );
}

export default HostelLovedByGuest;
