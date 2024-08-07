import { Box, Button, Flex, Stack, Text } from "@mantine/core";
import hostelRoom from "../../assets/hostelRoom.jpg";
import CustomSelect from "./CustomSelect";
import CustomDatePicker from "./CustomDatePicker";
import { useMediaQuery } from "@mantine/hooks";
import { FaArrowRight } from "react-icons/fa";

function DashBoardMain() {
  const isMobile = useMediaQuery("(max-width: 767px)"); // Adjusted for mobile view

  return (
    <Box align='center' justify='center' w='100%'>
      <Box
        direction='column'
        align='center'
        justify='center'
        h={{ base: "55vh", sm: "55vh" }}
        style={{
          width: "100%",
          backgroundImage: `url(${hostelRoom})`,
          backgroundSize: "cover", // Ensure the image covers the container
          backgroundPosition: "center", // Center the image
          backgroundRepeat: "no-repeat", // Prevent image repetition
          borderRadius: "25px", // Optional: rounded corners
          overflow: "hidden", // Ensures no overflow of the background image
        }}>
        <Flex
          direction='column'
          align='center'
          justify='center'
          style={{
            width: "100%", // Full width of the parent container
            height: "100%", // Full height of the parent container
            backgroundColor: "rgba(0, 0, 0, 0.3)", // Dark semi-transparent background
            borderRadius: "8px", // Rounded corners if needed
            padding: "20px", // Padding inside the content area
          }}>
          <Stack
            align='center'
            justify='center'
            dir='column'
            gap={{ base: "xs", sm: "sm" }}>
            <Text c='white' fw={600} fz={{ base: "23px", sm: "40px" }}>
              Book your stay with Hotela
            </Text>
            <Text c='white' fz={{ base: "10px", sm: "20px" }}>
              1,480,021 rooms around london are waiting for you!
            </Text>
          </Stack>
        </Flex>
      </Box>
      <Flex
        bg='white'
        maw={700}
        mt={-40}
        px={{ base: 10, sm: 50 }}
        py={{ base: 10 }}
        gap={{ base: 0, sm: 20 }}
        align='center'
        justify='center'
        style={{
          borderRadius: !isMobile && "100px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add shadow
        }}
        h={{ base: "100%", sm: 70 }}
        direction={{ base: "column", sm: "row" }}
        pos={"relative"}>
        <CustomSelect
          label='Location'
          placeholder='Where are you going to'
          data={["London", "Manchester", "Birmingham"]}
          showBorder={true}
        />
        <CustomDatePicker label='Check in' placeholder='Add data' />
        <CustomDatePicker label='Check out' placeholder='Add data' />
        <CustomSelect
          label='Guest'
          placeholder='Numbers of guest'
          data={["1", "2", "3", "4", "5"]}
          showBorder={false}
        />
        <Button
          w={{ base: "100%", sm: 60 }}
          h={{ base: 50, sm: 60 }}
          bg={"#1668e3"}
          px={10}
          pos={{ base: "static", sm: "absolute" }}
          right={isMobile ? "auto" : 10}
          style={{
            borderRadius: isMobile ? "" : "50%",
            margin: isMobile ? "10px 0" : "0",
          }}>
          {isMobile ? (
            <Text fw={600} fz={20}>
              Search
            </Text>
          ) : (
            <FaArrowRight size={30} />
          )}
        </Button>
      </Flex>
    </Box>
  );
}

export default DashBoardMain;
