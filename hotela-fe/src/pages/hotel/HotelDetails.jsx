import { Flex } from "@mantine/core";
import { IoArrowBack } from "react-icons/io5";
import HotelImages from "../../components/features/HotelDetails/HotelImages";
import HotelRooms from "../../components/features/HotelDetails/HotelRooms";
import HotelInfo from "../../components/features/HotelDetails/HotelInfo";

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
