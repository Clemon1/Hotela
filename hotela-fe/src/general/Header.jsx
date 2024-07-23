import {
  Button,
  Flex,
  Group,
  Title,
  Burger,
  Drawer,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header({ openLoginModal, openSignUpModal }) {
  const theme = useMantineTheme();
  const [drawerOpened, setDrawerOpened] = useState(false);
  const isMobile = useMediaQuery("(max-width: 767px)"); // Adjusted for mobile view

  return (
    <>
      <Flex h={60} align="center" justify="space-between">
        <Group gap="70">
          <Title order={2} fw={700} c={theme.colors.blue[6]}>
            Hotela
          </Title>

          {!isMobile && (
            <Group gap="lg">
              <NavLink
                to="/Properties"
                style={({ isActive }) => ({
                  color: isActive ? theme.colors.blue[6] : theme.colors.gray[6],
                  textDecoration: "none",
                })}
              >
                Properties
              </NavLink>
              <NavLink
                to="/attraction"
                style={({ isActive }) => ({
                  color: isActive ? theme.colors.blue[6] : theme.colors.gray[6],
                  textDecoration: "none",
                })}
              >
                Attraction
              </NavLink>
              <NavLink
                to="/popular"
                style={({ isActive }) => ({
                  color: isActive ? theme.colors.blue[6] : theme.colors.gray[6],
                  textDecoration: "none",
                })}
              >
                Popular
              </NavLink>
            </Group>
          )}
        </Group>

        {!isMobile ? (
          <Group>
            <Button variant="outline" radius="xl" onClick={openSignUpModal}>
              Sign up
            </Button>
            <Button variant="filled" radius="xl" onClick={openLoginModal}>
              Login
            </Button>
          </Group>
        ) : (
          <Burger
            opened={drawerOpened}
            onClick={() => setDrawerOpened((o) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
          />
        )}
      </Flex>

      <Drawer
        opened={drawerOpened}
        onClose={() => setDrawerOpened(false)}
        title="Hotela"
        padding="md"
        size="sm"
      >
        <NavLink
          to="/"
          style={({ isActive }) => ({
            display: "block",
            color: isActive ? theme.colors.blue[6] : theme.colors.gray[6],
            textDecoration: "none",
            marginBottom: 10,
          })}
          onClick={() => setDrawerOpened(false)}
        >
          Properties
        </NavLink>
        <NavLink
          to="/attraction"
          style={({ isActive }) => ({
            display: "block",
            color: isActive ? theme.colors.blue[6] : theme.colors.gray[6],
            textDecoration: "none",
            marginBottom: 10,
          })}
          onClick={() => setDrawerOpened(false)}
        >
          Attraction
        </NavLink>
        <NavLink
          to="/popular"
          style={({ isActive }) => ({
            display: "block",
            color: isActive ? theme.colors.blue[6] : theme.colors.gray[6],
            textDecoration: "none",
            marginBottom: 10,
          })}
          onClick={() => setDrawerOpened(false)}
        >
          Popular
        </NavLink>
        <Button
          fullWidth
          mt="md"
          onClick={() => {
            setDrawerOpened(false), openSignUpModal();
          }}
        >
          Sign up
        </Button>
        <Button
          fullWidth
          mt="md"
          onClick={() => {
            setDrawerOpened(false), openLoginModal();
          }}
        >
          Login
        </Button>
      </Drawer>
    </>
  );
}

export default Header;
