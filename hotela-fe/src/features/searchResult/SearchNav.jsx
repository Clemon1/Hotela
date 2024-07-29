import {
  Box,
  Button,
  Checkbox,
  Divider,
  Stack,
  TextInput,
  Title,
  Container,
  Group,
  useMantineTheme,
  RadioGroup,
  Radio,
  Badge,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";

function SearchNav() {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const [selectedStar, setSelectedStar] = useState(null);

  const handleStarClick = (star) => {
    setSelectedStar(star);
  };

  return (
    <Box>
      <Box
        style={{
          backgroundColor: theme.colors.gray[1],
          padding: theme.spacing.md,
          boxShadow: theme.shadows.sm,
        }}
        pr={{ md: 60 }}
      >
        <Group justify="space-between" mb="md">
          <IoArrowBack
            style={{ display: isMobile ? "none" : "block" }}
            size={30}
          />
          <Title order={2} style={{ flexGrow: 1, textAlign: "center" }}>
            Your Search
          </Title>
        </Group>

        <form>
          <Stack spacing="md">
            <TextInput
              label="Location"
              placeholder="Where are you going to"
              required
              withAsterisk={false}
            />
            <TextInput
              label="Check in"
              placeholder="Add date"
              required
              withAsterisk={false}
            />
            <TextInput
              label="Check out"
              placeholder="Add date"
              required
              withAsterisk={false}
            />
            <TextInput
              label="Guest"
              placeholder="Number of guests"
              required
              withAsterisk={false}
            />
            <Button fullWidth radius={"xl"}>
              Search
            </Button>
          </Stack>
        </form>
      </Box>

      <Divider mb="md" />

      <Stack spacing="md">
        <Title order={3}>Popular Searches</Title>
        <Checkbox label="Budget hostel" />
        <Checkbox label="Breakfast included" />
        <Checkbox label="Free airport shuttle" />
        <Checkbox label="Pet friendly" />
      </Stack>

      <Divider my="md" />

      <Stack spacing="md">
        <Title order={3}>Price per night</Title>
        <Checkbox label="Less than $50" />
        <Checkbox label="$50 to $100" />
        <Checkbox label="$100 to $200" />
        <Checkbox label="$500 and more" />
      </Stack>

      <Divider my="md" />

      <Stack spacing="md">
        <Title order={3}>Guest Rating</Title>
        <Checkbox label="Any" />
        <Checkbox label="Excellent" />
        <Checkbox label="Very good" />
        <Checkbox label="Good" />
        <Checkbox label="Fair" />
      </Stack>

      <Divider my="md" />

      <Stack spacing="md">
        <Title order={3}>Property Class</Title>
        <Group>
          {["Any", "5", "4", "3", "2", "1"].map((star, index) => (
            <Badge
              key={index}
              variant="filled"
              color={selectedStar === star ? "blue" : "gray"}
              size="lg"
              onClick={() => handleStarClick(star)}
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
            >
              {star === "Any" ? (
                "Any"
              ) : (
                <AiFillStar style={{ marginRight: 4 }} />
              )}
              {star !== "Any" && star}
            </Badge>
          ))}
        </Group>
      </Stack>
    </Box>
  );
}

export default SearchNav;
