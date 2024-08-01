import PropTypes from "prop-types";
import {
  Avatar,
  Button,
  Flex,
  Group,
  Menu,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { currentUser, logOut } from "../Store/auth/authSlice";
import { notifications } from "@mantine/notifications";
import { IoMdCheckmarkCircle } from "react-icons/io";
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
              style={{
                borderRadius: "18px",
              }}>
              <Menu.Label>Application</Menu.Label>
              <Menu.Item leftSection={""}>Profile</Menu.Item>
              <Menu.Item leftSection={""}>Notification</Menu.Item>

              <Menu.Divider />

              <Menu.Label>Danger zone</Menu.Label>

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
