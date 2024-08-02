import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Group,
  Menu,
  Title,
  Tooltip,
  useMantineTheme,
} from "@mantine/core";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { currentUser, logOut } from "../Store/auth/authSlice";
import { notifications } from "@mantine/notifications";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { MdVerified } from "react-icons/md";
function Header({ openLoginModal, openSignUpModal }) {
  const user = useSelector(currentUser);
  const dispatch = useDispatch();
  const theme = useMantineTheme();
  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(logOut());
    notifications.show({
      title: "Logged Out",
      radius: "lg",
      message: "",
      color: "teal",
      icon: <IoMdCheckmarkCircle fontSize={18} />,
    });
  };

  return (
    <>
      <Flex h={60} align='center' justify='space-between'>
        <NavLink to='/' style={{ textDecoration: "none" }}>
          <Title order={2} fw={700} c={theme.colors.blue[6]}>
            Hotela
          </Title>
        </NavLink>

        {user ? (
          <Menu shadow='md' width={200}>
            <Menu.Target>
              <Avatar
                size={"md"}
                radius={"lg"}
                name={`${user && user.userInfo && user.userInfo.firstName} ${
                  user && user.userInfo && user.userInfo.lastName
                }`}
                color='initials'
              />
            </Menu.Target>

            <Menu.Dropdown
              w={{ lg: "25%!important", xl: "30%!important" }}
              style={{
                borderRadius: "18px",
              }}>
              <Flex w={"100%"} align={"center"} pr={10}>
                <Flex direction={"column"} py={15} w={"100%"}>
                  <Menu.Label fz={16} c={"#000814"}>
                    Hi, {user && user.userInfo && user.userInfo.firstName}
                  </Menu.Label>
                  <Menu.Label fz={13} c={"#000814"}>
                    {user && user.userInfo && user.userInfo.email}
                  </Menu.Label>
                </Flex>
                {user && user.userInfo && user.userInfo.isVerified === true && (
                  <Tooltip
                    label='Verified!'
                    color='#eaf4ff'
                    fz={13}
                    withArrow
                    arrowPosition='side'
                    arrowOffset={5}
                    arrowSize={7}
                    fw={500}
                    style={{
                      color: "#000814",
                    }}
                    position='left-start'
                    offset={{ mainAxis: -8, crossAxis: -20 }}
                    transitionProps={{ transition: "fade-up", duration: 300 }}>
                    <Box bg={"transparent"} w={"fit-content"} h={"fit-content"}>
                      <MdVerified color='blue' fontSize={25} />
                    </Box>
                  </Tooltip>
                )}
              </Flex>

              <Menu.Label>Application</Menu.Label>
              <Menu.Item leftSection={""}>Profile</Menu.Item>
              <Menu.Item leftSection={""}>List of favorites</Menu.Item>
              <Menu.Item leftSection={""}>Notification</Menu.Item>

              <Menu.Divider />

              <Menu.Item color='red' leftSection={""} onClick={handleLogOut}>
                LogOut
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        ) : (
          <Group>
            <Button variant='outline' radius='xl' onClick={openSignUpModal}>
              Sign up
            </Button>
            <Button variant='filled' radius='xl' onClick={openLoginModal}>
              Login
            </Button>
          </Group>
        )}
      </Flex>
    </>
  );
}

Header.propTypes = {
  openLoginModal: PropTypes.func.isRequired,
  openSignUpModal: PropTypes.func.isRequired,
};

export default Header;
