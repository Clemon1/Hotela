import PropTypes from "prop-types";
import {
  Badge,
  Box,
  Button,
  Flex,
  Group,
  Image,
  Pagination,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

function FavouritesList({ favouriteList }) {
  function chunk(array, size) {
    if (!array.length) {
      return [];
    }
    const head = array.slice(0, size);
    const tail = array.slice(size);
    return [head, ...chunk(tail, size)];
  }

  const [activePage, setPage] = useState(1);
  const [hotels, setHotels] = useState(favouriteList);
  const [animate, setAnimate] = useState(null);
  const data = chunk(hotels, 3);

  // Use useEffect to scroll to top when activePage changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activePage]);

  const handleFavouriteClick = (id) => {
    setAnimate(id);
    setHotels((prevhotels) =>
      prevhotels.map((hotel) =>
        hotel.id === id ? { ...hotel, favourite: !hotel.favourite } : hotel
      )
    );
    setTimeout(() => setAnimate(null), 300);
  };

  const isMobile = useMediaQuery("(max-width: 980px)"); // Adjusted for mobile view

  return (
    <Box w={"100%"} p="lg">
      <Stack gap={1}>
        <Title order={2}>Your Favourites</Title>
        <Text size="sm" c="dimmed">
          {favouriteList.length} items in your list
        </Text>
      </Stack>

      <Stack gap={20} mt={20} px={30}>
        {data[activePage - 1].map((hotel) => (
          <Flex
            key={hotel.id}
            direction={isMobile ? "column" : "row"}
            style={{
              borderRadius: "15px",
              boxShadow: "1px 0px 4px 4px rgba(0, 0, 0, 0.1)",
              height: "auto",
            }}
            gap={14}
          >
            <Box w={isMobile ? "100%" : "35%"} h={"auto"} pos={"relative"}>
              <Image
                src={hotel.image}
                fit="cover"
                h={"100%"}
                style={{
                  borderRadius: "15px",
                }}
              />

              <Box
                onClick={() => handleFavouriteClick(hotel.id)}
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
                  transform: animate === hotel.id ? "scale(1.3)" : "scale(1)",
                }}
                bg={"rgba(255, 255, 255, 0.5)"}
                w={30}
                h={30}
              >
                {hotel.favourite ? (
                  <FaHeart color="#dd0426" size={16} />
                ) : (
                  <CiHeart color="#ff6347" size={16} />
                )}
              </Box>
            </Box>

            <Flex
              direction={"column"}
              p={10}
              gap={13}
              w={isMobile ? "100%" : "75%"}
            >
              <Group justify="space-between" align="flex-start">
                <Stack gap={0}>
                  <Title order={4}>{hotel.hotelName}</Title>
                  <Text fz={12} c={"gray"}>
                    {hotel.distance}
                  </Text>

                  {hotel.cancellation && (
                    <Text size="xs" c="gray" mt={1}>
                      Free cancellation
                    </Text>
                  )}

                  {hotel.BreakfastIncluded && (
                    <Text size="xs" c="gray" mt={1}>
                      Breakfast included
                    </Text>
                  )}
                </Stack>

                <Group gap={8}>
                  <Stack align="end" justify="center" gap="0">
                    <Text fz={16} c={"green"} fw={600}>
                      {hotel.rating}
                    </Text>
                    <Text fz={11} c={"gray"}>
                      {hotel.reviews}
                    </Text>
                  </Stack>
                  <Badge
                    variant="light"
                    color="green"
                    fz={16}
                    py={20}
                    radius={"md"}
                  >
                    {hotel.ratingScore}
                  </Badge>
                </Group>
              </Group>

              <Group align="center" justify="space-between">
                <Text fz={{ base: 12, sm: 14 }} fw={500}>
                  Check prices and availability for your selected dates
                </Text>

                <Button>Check Prices</Button>
              </Group>
            </Flex>
          </Flex>
        ))}
      </Stack>

      <Flex justify={"center"} my={20}>
        <Pagination
          color={"#1668e3"}
          total={data.length}
          value={activePage}
          onChange={setPage}
          mt="sm"
        />
      </Flex>
    </Box>
  );
}

FavouritesList.propTypes = {
  favouriteList: PropTypes.object.isRequired,
};

export default FavouritesList;
