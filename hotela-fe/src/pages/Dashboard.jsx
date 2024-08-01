import { Flex } from "@mantine/core";
import PopularDestination from "../features/dashboard/PopularDestination";
import HostelLovedByGuest from "../features/dashboard/HostelLovedByGuest";
import DashBoardMain from "../features/dashboard/DashBoardMain";

const Dashboard = () => {
  return (
    <Flex w='100%' direction='column'>
      <DashBoardMain />
      <PopularDestination />
      <HostelLovedByGuest />
    </Flex>
  );
};

export default Dashboard;
