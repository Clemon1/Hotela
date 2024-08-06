import { Button, Flex, Group, Title, useMantineTheme } from "@mantine/core";
import { NavLink } from "react-router-dom";

function Header() {
  const theme = useMantineTheme();

  return (
    <Flex h={60} align="center" justify="space-between" p="md">
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <Title order={2} fw={700} fz={25} c={theme.colors.blue[6]}>
          Hotela
        </Title>
      </NavLink>

      <Group spacing="md">
        <NavLink to="/signup" style={{ textDecoration: "none" }}>
          <Button variant="outline" radius="xl">
            Sign up
          </Button>
        </NavLink>
        <NavLink to="/login" style={{ textDecoration: "none" }}>
          <Button variant="filled" radius="xl">
            Login
          </Button>
        </NavLink>
      </Group>
    </Flex>
  );
}

export default Header;
