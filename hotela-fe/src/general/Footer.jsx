import {
  Flex,
  Stack,
  Text,
  Title,
  Group,
  useMantineTheme,
} from "@mantine/core";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  const theme = useMantineTheme();
  return (
    <Flex
      direction="column"
      bg="#f1f1f1" // Light gray color
      py={20}
      px={{ base: 10, sm: 80 }}
      style={{
        borderTop: "1px solid #e0e0e0",
        width: "100%",
      }}
    >
      <Flex justify="space-between" align="flex-start" wrap="wrap">
        <Stack gap={10} style={{ maxWidth: 300 }}>
          <Title order={3} c={theme.colors.blue[6]}>
            Hotela
          </Title>
          <Text size="sm">Your favorite booking experience since 2024</Text>
        </Stack>

        <Stack gap={10}>
          <Title order={4} c={theme.colors.blue[6]}>
            Follow Us
          </Title>
          <Group spacing="sm">
            <a href="#" aria-label="Facebook">
              <FaFacebookF size={20} color="#333" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter size={20} color="#333" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram size={20} color="#333" />
            </a>
          </Group>
        </Stack>
      </Flex>

      <Flex
        justify="center"
        align="center"
        direction="column"
        style={{ color: "#333" }}
      >
        <Text size="sm">© 2024 Hotela. All rights reserved.</Text>
        <Text size="xs" c={theme.colors.blue[6]}>
          Designed by YourCompany
        </Text>
      </Flex>
    </Flex>
  );
}

export default Footer;
