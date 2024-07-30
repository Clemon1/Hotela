import { Box, Divider, Flex } from "@mantine/core";
import { IoArrowBack } from "react-icons/io5";
import YourDetails from "../features/roomDetails/YourDetails";
import PropertyDetails from "../features/roomDetails/PropertyDetails";
import PaymentMethods from "../features/roomDetails/PaymentMethods";
import { useMediaQuery } from "@mantine/hooks";
import RoomInfo from "../general/RoomInfo";

function RoomDetails() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Flex w={"100%"} mb={50} direction={"column"}>
      <IoArrowBack style={{ display: isMobile ? "none" : "flex" }} size={30} />
      <Flex
        gap={20}
        mt={{ sm: 20 }}
        direction={{ base: "column-reverse", sm: "row" }}
        w={"100%"}
      >
        <Box h={"100%"} w={"100%"}>
          <YourDetails />
          <Divider my={"xl"} />
          <PropertyDetails />
          <Divider my={"xl"} />
          <PaymentMethods />
        </Box>
        <Box h={"100%"} w={"100%"}>
          <RoomInfo />
        </Box>
      </Flex>
    </Flex>
  );
}

export default RoomDetails;
