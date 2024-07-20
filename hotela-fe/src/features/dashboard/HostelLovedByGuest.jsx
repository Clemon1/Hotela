import { Box, Flex, Group, Image, Stack, Text } from "@mantine/core";
import dashBoardRoom1 from "../../assets/dashBoardRoom1.jpg";
import { FaAngleRight } from "react-icons/fa";
import { Carousel } from "@mantine/carousel";

function HostelLovedByGuest() {
  return (
    <Box mt={20} mb={10}>
      <Text fw={600} mb={10}>
        Hostel Loved By Guest
      </Text>

      <Carousel>
        <Stack
          w={250}
          h={250}
          p={5}
          gap={0}
          style={{
            boxShadow: `0px 4px 8px rgba(0, 0, 0, 0.4)`,
            borderRadius: "15px",
            alignItems: "flex-start", // Align items to the start
            display: "flex", // Ensure flex display is used
          }}
        >
          <Box style={{ borderRadius: "15px", overflow: "hidden" }}>
            <Image radius={15} src={dashBoardRoom1} />
          </Box>

          <Box>
            <Text>Holo Hotel</Text>
            <Text>Islington</Text>
          </Box>

          <Flex
            align="center"
            style={{ width: "100%", justifyContent: "space-between" }}
          >
            <Text>from $130/night</Text>
            <FaAngleRight size={20} />
          </Flex>
        </Stack>
      </Carousel>
    </Box>
  );
}

export default HostelLovedByGuest;
