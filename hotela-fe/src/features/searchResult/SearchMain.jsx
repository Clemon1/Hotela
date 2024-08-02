import {
  Box,
  Flex,
  Group,
  Image,
  Select,
  Stack,
  Text,
  Title,
  Badge,
  Pagination,
} from "@mantine/core";
import hostelRoom from "../../assets/hostelRoom.jpg";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

function SearchMain() {
  const roomData = [
    {
      id: 1,
      image: hostelRoom,
      hotelName: "Hotel Norrebro",
      distance: "0.4 km from city centre",
      cancellation: "Free cancellation • Breakfast included",
      reviews: "1000 reviews",
      rating: "Excellent",
      ratingScore: "9.6",
      roomType: "Comfort room",
      bedType: "1x king size bed",
      bathroom: "1x bathroom",
      price: "$180",
      nights: "3 nights, 2 guests",
      badges: ["#Hotel deal", "#Popular"],
    },
    {
      id: 2,
      image: hostelRoom,
      hotelName: "Hotel Central",
      distance: "1.2 km from city centre",
      cancellation: "Free cancellation • Breakfast included",
      reviews: "800 reviews",
      rating: "Very Good",
      ratingScore: "8.5",
      roomType: "Deluxe room",
      bedType: "1x queen size bed",
      bathroom: "1x bathroom",
      price: "$200",
      nights: "3 nights, 2 guests",
      badges: ["#Luxury", "#Trending"],
    },
    {
      id: 3,
      image: hostelRoom,
      hotelName: "Hotel Vista",
      distance: "2.0 km from city centre",
      cancellation: "Free cancellation • Breakfast included",
      reviews: "500 reviews",
      rating: "Good",
      ratingScore: "7.8",
      roomType: "Standard room",
      bedType: "2x single beds",
      bathroom: "1x bathroom",
      price: "$150",
      nights: "3 nights, 2 guests",
      badges: ["#Value", "#Economy"],
    },
    {
      id: 4,
      image: hostelRoom,
      hotelName: "Hotel Ocean",
      distance: "0.8 km from city centre",
      cancellation: "Free cancellation • Breakfast included",
      reviews: "1200 reviews",
      rating: "Exceptional",
      ratingScore: "9.8",
      roomType: "Suite",
      bedType: "1x king size bed",
      bathroom: "2x bathrooms",
      price: "$350",
      nights: "3 nights, 2 guests",
      badges: ["#TopRated", "#Luxury"],
    },
    {
      id: 5,
      image: hostelRoom,
      hotelName: "Hotel Sky",
      distance: "0.3 km from city centre",
      cancellation: "Free cancellation • Breakfast included",
      reviews: "900 reviews",
      rating: "Excellent",
      ratingScore: "9.2",
      roomType: "Junior Suite",
      bedType: "1x queen size bed",
      bathroom: "1x bathroom",
      price: "$250",
      nights: "3 nights, 2 guests",
      badges: ["#Popular", "#Luxury"],
    },
    {
      id: 6,
      image: hostelRoom,
      hotelName: "Hotel Horizon",
      distance: "1.5 km from city centre",
      cancellation: "Free cancellation • Breakfast included",
      reviews: "700 reviews",
      rating: "Very Good",
      ratingScore: "8.4",
      roomType: "Comfort room",
      bedType: "1x king size bed",
      bathroom: "1x bathroom",
      price: "$180",
      nights: "3 nights, 2 guests",
      badges: ["#Trending", "#Comfort"],
    },
    {
      id: 7,
      image: hostelRoom,
      hotelName: "Hotel Garden",
      distance: "2.3 km from city centre",
      cancellation: "Free cancellation • Breakfast included",
      reviews: "600 reviews",
      rating: "Good",
      ratingScore: "7.9",
      roomType: "Deluxe room",
      bedType: "1x queen size bed",
      bathroom: "1x bathroom",
      price: "$220",
      nights: "3 nights, 2 guests",
      badges: ["#Value", "#Popular"],
    },
    {
      id: 8,
      image: hostelRoom,
      hotelName: "Hotel Mountain",
      distance: "3.0 km from city centre",
      cancellation: "Free cancellation • Breakfast included",
      reviews: "400 reviews",
      rating: "Good",
      ratingScore: "7.5",
      roomType: "Standard room",
      bedType: "2x single beds",
      bathroom: "1x bathroom",
      price: "$160",
      nights: "3 nights, 2 guests",
      badges: ["#Economy", "#Comfort"],
    },
    {
      id: 9,
      image: hostelRoom,
      hotelName: "Hotel River",
      distance: "1.0 km from city centre",
      cancellation: "Free cancellation • Breakfast included",
      reviews: "1100 reviews",
      rating: "Exceptional",
      ratingScore: "9.9",
      roomType: "Suite",
      bedType: "1x king size bed",
      bathroom: "2x bathrooms",
      price: "$400",
      nights: "3 nights, 2 guests",
      badges: ["#TopRated", "#Luxury"],
    },
  ];

  function chunk(array, size) {
    if (!array.length) {
      return [];
    }
    const head = array.slice(0, size);
    const tail = array.slice(size);
    return [head, ...chunk(tail, size)];
  }

  const [activePage, setPage] = useState(1);
  const [rooms, setRooms] = useState(roomData);
  const [animate, setAnimate] = useState(null);
  const data = chunk(rooms, 3);

  // Use useEffect to scroll to top when activePage changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activePage]);

  const handleFavouriteClick = (id) => {
    setAnimate(id);
    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.id === id ? { ...room, favourite: !room.favourite } : room
      )
    );
    setTimeout(() => setAnimate(null), 300);
  };

  return (
    <Box pl={40} pr={40} c={"#000814"}>
      <Text fz="sm">140 search results for</Text>
      <Group align="center" justify="space-between" mt={-14} mb={20}>
        <Title order={4}>Copenhagen, Dec 9 - 12, 2 guests, 1 room</Title>
        <Select
          label="Sort by"
          fw={600}
          defaultValue="Recommended"
          placeholder="Pick value"
          data={[
            "Recommended",
            "Price: high to low",
            "Price: low to high",
            "Star rating",
          ]}
          variant="unstyled"
          styles={(theme) => ({
            root: {
              width: "30%",
            },
            input: {
              border: "1px solid gray",
              padding: "0.5rem 1rem",
              borderRadius: theme.radius.md,
            },
          })}
        />
      </Group>

      <Stack gap={20}>
        {data[activePage - 1].map((room) => (
          <Flex
            key={room.id}
            style={{
              borderRadius: "15px",
              boxShadow: "1px 0px 4px 4px rgba(0, 0, 0, 0.1)",
              height: "auto",
            }}
            gap={14}
          >
            <Box w={"35%"} h={"auto"} pos={"relative"}>
              <Image
                src={room.image}
                fit="cover"
                h={"100%"}
                style={{
                  borderRadius: "15px",
                }}
              />

              <Box
                onClick={() => handleFavouriteClick(room.id)}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "100%",
                  transition: "transform 0.3s ease",
                  transform: animate === room.id ? "scale(1.3)" : "scale(1)",
                }}
                bg={"rgba(255, 255, 255, 0.5)"}
                w={30}
                h={30}
              >
                {room.favourite ? (
                  <FaHeart color="white" size={16} />
                ) : (
                  <CiHeart color="white" size={16} />
                )}
              </Box>
            </Box>

            <Flex direction={"column"} p={10} gap={13} w="75%">
              <Group justify="space-between" align="flex-start">
                <Stack gap={0}>
                  <Title order={4}>{room.hotelName}</Title>
                  <Text fz={12} c={"gray"}>
                    {room.distance}
                  </Text>
                  <Text size="xs" c="gray" mt={1}>
                    {room.cancellation}
                  </Text>
                </Stack>

                <Group gap={8}>
                  <Stack align="end" justify="center" gap="0">
                    <Text fz={16} c={"green"} fw={600}>
                      {room.rating}
                    </Text>
                    <Text fz={11} c={"gray"}>
                      {room.reviews}
                    </Text>
                  </Stack>
                  <Badge
                    variant="light"
                    color="green"
                    fz={16}
                    py={20}
                    radius={"md"}
                  >
                    {room.ratingScore}
                  </Badge>
                </Group>
              </Group>

              <Group align="center" justify="space-between">
                <Stack gap={0}>
                  <Text fz={12} fw={600}>
                    {room.roomType}
                  </Text>
                  <Text fz={12} c="gray">
                    {room.bedType}
                  </Text>
                  <Text fz={12} c="gray">
                    {room.bathroom}
                  </Text>
                </Stack>
                <Stack gap={0} mt={10}>
                  <Text ta={"end"} fw={600}>
                    {room.price}
                  </Text>
                  <Text fz={12} c="gray">
                    {room.nights}
                  </Text>
                </Stack>
              </Group>

              <Group align="center" justify="space-between">
                <Group>
                  <Badge color="blue" py={13} px={13} variant="outline" fz={9}>
                    {room.badges.at(0)}
                  </Badge>
                  <Badge color="blue" py={13} px={13} variant="outline" fz={9}>
                    {room.badges.at(1)}
                  </Badge>
                </Group>
              </Group>
            </Flex>
          </Flex>
        ))}
      </Stack>

      <Flex justify={"center"}>
        <Pagination
          total={data.length}
          value={activePage}
          onChange={setPage}
          mt="sm"
        />
      </Flex>
    </Box>
  );
}

export default SearchMain;
