import { Box, Flex, Select, Stack, Text } from "@mantine/core";
import hostelRoom from "../../assets/hostelRoom.jpg";
import CustomSelect from "./CustomSelect";
import CustomDatePicker from "./CustomDatePicker";

function DashBoardMain() {
  const icon = <></>;

  return (
    <Box align="center" justify="center" w="100%">
      <Box
        direction="column"
        align="center"
        justify="center"
        h={{ base: 150, md: 250 }}
        style={{
          width: "100%",
          backgroundImage: `url(${hostelRoom})`,
          backgroundSize: "cover", // Ensure the image covers the container
          backgroundPosition: "center", // Center the image
          backgroundRepeat: "no-repeat", // Prevent image repetition
          borderRadius: "25px", // Optional: rounded corners
          overflow: "hidden", // Ensures no overflow of the background image
        }}
      >
        <Flex
          direction="column"
          align="center"
          justify="center"
          style={{
            width: "100%", // Full width of the parent container
            height: "100%", // Full height of the parent container
            backgroundColor: "rgba(0, 0, 0, 0.3)", // Dark semi-transparent background
            borderRadius: "8px", // Rounded corners if needed
            padding: "20px", // Padding inside the content area
          }}
        >
          <Stack align="center" justify="center" dir="column" gap="sm">
            <Text c="white" fw={600} fz={{ base: "20px", md: "40px" }}>
              Book your stay with Hotela
            </Text>
            <Text c="white" fz={{ base: "10px", md: "20px" }}>
              1,480,021 rooms around london are waiting for you!
            </Text>
          </Stack>
        </Flex>
      </Box>
      <Flex
        bg="white"
        maw={700}
        mt={-50}
        px={50}
        gap={20}
        align="center"
        style={{
          borderRadius: "100px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add shadow
        }}
        h={100}
      >
        <CustomSelect
          label="Location"
          placeholder="Where are you going to"
          data={["London", "Manchester", "Birmingham"]}
          showBorder={true}
        />
        <CustomDatePicker label="Check in" placeholder="Add data" />
        <CustomDatePicker label="Check out" placeholder="Add data" />
        <CustomSelect
          label="Guest"
          placeholder="Numbers of guest"
          data={["London", "Manchester", "Birmingham"]}
        />
      </Flex>
    </Box>
  );
}

export default DashBoardMain;
