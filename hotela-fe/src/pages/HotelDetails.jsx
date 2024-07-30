import { Flex } from "@mantine/core";
import { IoArrowBack } from "react-icons/io5";
import HotelImages from "../features/HotelDetails/HotelImages";
import HotelRooms from "../features/HotelDetails/HotelRooms";
import HotelInfo from "../features/HotelDetails/HotelInfo";

function HotelDetails() {
  return (
    <Flex w={"100%"} direction={"column"} mb={50}>
      <IoArrowBack size={30} />
      <HotelImages />
      <HotelInfo />
      <HotelRooms />
    </Flex>
  );
}

export default HotelDetails;
