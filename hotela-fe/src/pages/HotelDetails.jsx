import { Flex } from "@mantine/core";
import { IoArrowBack } from "react-icons/io5";
import HostelImages from "../features/hotelDetails/HotelImages";
import HostelRooms from "../features/hotelDetails/HostelRooms";
import HotelInfo from "../features/hotelDetails/HotelInfo";

function HotelDetails() {
  return (
    <Flex w={"100%"} direction={"column"} mb={50}>
      <IoArrowBack size={30} />
      <HostelImages />
      <HotelInfo />
      <HostelRooms />
    </Flex>
  );
}

export default HotelDetails;
