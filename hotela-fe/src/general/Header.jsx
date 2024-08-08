import { Button, Flex, Group, Title, useMantineTheme } from "@mantine/core";
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

export default Header;
