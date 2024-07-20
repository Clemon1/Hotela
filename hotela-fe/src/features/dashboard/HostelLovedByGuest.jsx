import { Box, Image, Stack, Text, Flex, useMantineTheme } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import dashBoardRoom1 from "../../assets/dashBoardRoom1.jpg";
import { FaAngleRight } from "react-icons/fa";

const items = [
  {
    id: 1,
    name: "Cozy Cottage",
    location: "Camden",
    price: "from $90/night",
    image: dashBoardRoom1,
  },
  {
    id: 2,
    name: "Elegant Estate",
    location: "Kensington",
    price: "from $150/night",
    image: dashBoardRoom1,
  },
  {
    id: 3,
    name: "Modern Apartment",
    location: "Chelsea",
    price: "from $200/night",
    image: dashBoardRoom1,
  },
  {
    id: 4,
    name: "Classic Villa",
    location: "Hampstead",
    price: "from $250/night",
    image: dashBoardRoom1,
  },
  {
    id: 5,
    name: "Beach House",
    location: "Brighton",
    price: "from $180/night",
    image: dashBoardRoom1,
  },
  {
    id: 6,
    name: "Country Inn",
    location: "Oxford",
    price: "from $120/night",
    image: dashBoardRoom1,
  },
  {
    id: 7,
    name: "Luxury Loft",
    location: "Mayfair",
    price: "from $300/night",
    image: dashBoardRoom1,
  },
  {
    id: 8,
    name: "Rustic Retreat",
    location: "Cotswolds",
    price: "from $110/night",
    image: dashBoardRoom1,
  },
  {
    id: 9,
    name: "Urban Studio",
    location: "Soho",
    price: "from $130/night",
    image: dashBoardRoom1,
  },
  {
    id: 10,
    name: "Historic Mansion",
    location: "Greenwich",
    price: "from $220/night",
    image: dashBoardRoom1,
  },
];

function HostelLovedByGuest() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Box mt={6} mb={10}>
      <Text fw={600}>Hostel Loved By Guest</Text>

      <Carousel
        height={260}
        slideSize="25%"
        slideGap="md"
        align={isMobile ? "center" : "start"}
        controlSize={40}
        controlsOffset="sm"
        py={20}
        loop={true}
        pl={{ base: 0, md: 25 }}
        withControls={!isMobile}
      >
        {items.map((item) => (
          <Carousel.Slide key={item.id} px={4}>
            <Stack
              w={250}
              h={250}
              p={10}
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

              <Box mt={8} style={{ cursor: "default" }}>
                <Text fz={16} fw={600} c="black">
                  {item.name}
                </Text>
                <Text fz={12} mt={-5}>
                  {item.location}
                </Text>
              </Box>

              <Flex
                align="center"
                mt={10}
                style={{
                  width: "100%",
                  justifyContent: "space-between",
                  cursor: "pointer",
                }}
              >
                <Text fz={15} fw={700}>
                  {item.price}
                </Text>
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
