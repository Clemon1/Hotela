import PropTypes from "prop-types";
import { Button, Flex, Group, Text, useMantineTheme } from "@mantine/core";
import { NavLink } from "react-router-dom";

function Header({ openLoginModal, openSignUpModal }) {
  const theme = useMantineTheme();

  return (
    <>
      <Flex h={60} align='center' justify='space-between'>
        <NavLink to='/' style={{ textDecoration: "none" }}>
          <Text order={2} fw={700} fz={25} c={theme.colors.blue[6]}>
            Hotela
          </Text>
        </NavLink>

        <Group>
          <Button variant='outline' radius='xl' onClick={openSignUpModal}>
            Sign up
          </Button>
          <Button variant='filled' radius='xl' onClick={openLoginModal}>
            Login
          </Button>
        </Group>
      </Flex>
    </>
  );
}

Header.propTypes = {
  openLoginModal: PropTypes.func.isRequired,
  openSignUpModal: PropTypes.func.isRequired,
};

export default Header;
