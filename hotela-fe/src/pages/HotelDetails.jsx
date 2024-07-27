import { Badge, Flex, Group, Stack, Text, Title } from "@mantine/core";
import { IoArrowBack } from "react-icons/io5";
import HostelImages from "../features/HotelDetails/HotelImages";
import HotelInfo from "../features/HotelDetails/HotelInfo";

function HotelDetails() {
  return (
    <Flex w={"100%"} direction={"column"}>
      <IoArrowBack size={30} />
      <HostelImages />
      <HotelInfo />
    </Flex>
  );
}

export default HotelDetails;
