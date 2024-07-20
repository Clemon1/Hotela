import { Box, Image, Stack, Text, Flex } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import dashBoardRoom1 from "../../assets/dashBoardRoom1.jpg";
import { FaAngleRight } from "react-icons/fa";

const items = [
  {
    id: 1,
    name: "Holo Hotel",
    location: "Islington",
    price: "from $100/night",
    image: dashBoardRoom1,
  },
  {
    id: 2,
    name: "Holo Hotel",
    location: "Islington",
    price: "from $120/night",
    image: dashBoardRoom1,
  },
  {
    id: 3,
    name: "Holo Hotel",
    location: "Islington",
    price: "from $130/night",
    image: dashBoardRoom1,
  },
  {
    id: 4,
    name: "Holo Hotel",
    location: "Islington",
    price: "from $140/night",
    image: dashBoardRoom1,
  },
  {
    id: 5,
    name: "Holo Hotel",
    location: "Islington",
    price: "from $150/night",
    image: dashBoardRoom1,
  },
  {
    id: 6,
    name: "Holo Hotel",
    location: "Islington",
    price: "from $160/night",
    image: dashBoardRoom1,
  },
  {
    id: 7,
    name: "Holo Hotel",
    location: "Islington",
    price: "from $170/night",
    image: dashBoardRoom1,
  },
  {
    id: 8,
    name: "Holo Hotel",
    location: "Islington",
    price: "from $180/night",
    image: dashBoardRoom1,
  },
  {
    id: 9,
    name: "Holo Hotel",
    location: "Islington",
    price: "from $190/night",
    image: dashBoardRoom1,
  },
  {
    id: 10,
    name: "Holo Hotel",
    location: "Islington",
    price: "from $200/night",
    image: dashBoardRoom1,
  },
];

function HostelLovedByGuest() {
  return (
    <Box mt={20} mb={10}>
      <Text fw={600} mb={10}>
        Hostel Loved By Guest
      </Text>

      <Carousel
        withIndicators
        height={300}
        slideSize="20%"
        slideGap="md"
        loop
        align="start"
        controlSize={32}
      >
        {items.map((item) => (
          <Carousel.Slide key={item.id}>
            <Stack
              w={250}
              h={250}
              p={5}
              gap={0}
              style={{
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",
                borderRadius: "15px",
                alignItems: "flex-start",
                display: "flex",
              }}
            >
              <Box style={{ borderRadius: "15px", overflow: "hidden" }}>
                <Image radius={15} src={item.image} />
              </Box>

              <Box>
                <Text>{item.name}</Text>
                <Text>{item.location}</Text>
              </Box>

              <Flex
                align="center"
                style={{ width: "100%", justifyContent: "space-between" }}
              >
                <Text>{item.price}</Text>
                <FaAngleRight size={20} />
              </Flex>
            </Stack>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  );
}

export default HostelLovedByGuest;
