import { Flex } from "@mantine/core";
import PopularDestination from "../features/dashboard/PopularDestination";
import HostelLovedByGuest from "../features/dashboard/HostelLovedByGuest";
import DashBoardMain from "../features/dashboard/DashBoardMain";
import { useSelector } from "react-redux";
import { currentUser } from "../Store/auth/authSlice";

const Dashboard = () => {
  const user = useSelector(currentUser);

  console.log(user.userInfo);
  return (
    <Flex w='100%' direction='column'>
      <DashBoardMain />
      <PopularDestination />
      <HostelLovedByGuest />
    </Flex>
  );
};

export default Dashboard;
