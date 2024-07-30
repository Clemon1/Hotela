import { Flex } from "@mantine/core";
import { IoArrowBack } from "react-icons/io5";
import HostelImages from "../features/HotelDetails/HostelImages";
import HostelRooms from "../features/HotelDetails/HostelRooms";
import HotelInfo from "../features/HotelDetails/HotelInfo";

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
