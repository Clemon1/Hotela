import { Box, Flex, Select, Stack, Text } from "@mantine/core";
import hostelRoom from "../../assets/hostelRoom.jpg";
import PopularDestination from "../../features/dashboard/PopularDestination";
import HostelLovedByGuest from "../../features/dashboard/HostelLovedByGuest";

const Dashboard = () => {
  return (
    <Flex w="100%" direction="column">
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
          style={{
            borderRadius: "100px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add shadow
          }}
          h={100}
        >
          <Select
            variant="unstyled"
            label="Location"
            placeholder="Where are you going?"
            data={["London", "Manchester", "Birmingham"]}
            comboboxProps={{
              transitionProps: { transition: "pop", duration: 200 },
            }}
            mt={10}
            pt={10}
            searchable
            nothingFoundMessage="Nothing found..."
            clearable
            styles={(theme) => ({
              input: {
                border: "none", // Remove border
                boxShadow: "none", // Remove shadow
                padding: 0, // Remove padding
                marginTop: -4,
              },
              label: {
                textAlign: "start", // Align label to start
                marginBottom: 0, // Space between label and input
                marginRight: 100,
              },
              placeholder: {
                color: theme.colors.gray[5], // Placeholder text color
                textAlign: "start", // Align placeholder text to start
                marginTop: -100,
              },
            })}
          />
        </Flex>
      </Box>

      <PopularDestination />
      <HostelLovedByGuest />
    </Flex>
  );
};

export default Dashboard;
