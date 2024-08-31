/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Stack,
  Title,
  Group,
  useMantineTheme,
  Badge,
  RangeSlider,
  Text,
  Image,
  Anchor,
  Select,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";
import { DatePickerInput } from "@mantine/dates";
import googleMap from "../../../assets/googleMap.jpg";
import { cities } from "../../../cities";

function SearchNav({
  onClose,
  handleSubmit,
  location,
  onChange1,
  checkIn,
  onChange2,
  checkOut,
  onChange3,
  guest,
  onChange4,
  price,
  setPrice,
}) {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const [selectedStar, setSelectedStar] = useState(null);

  const handleStarClick = (star) => {
    setSelectedStar(star);
  };

  return (
    <Box c={"#000814"}>
      <Box
        style={{
          backgroundColor: "#f8f9fa",
          padding: theme.spacing.md,
          boxShadow: theme.shadows.sm,
          margin: -13,
        }}
        pr={{ md: 60 }}>
        <Group justify='space-between' mb='md'>
          <IoArrowBack
            style={{ display: isMobile ? "none" : "block" }}
            size={30}
            onClick={onClose}
          />
          <Title order={3} style={{ flexGrow: 1, textAlign: "center" }}>
            Your Search
          </Title>
        </Group>

        <Box
          bd={"1px solid #DFDFDF"}
          h={200}
          style={{
            borderRadius: "1rem",
            cursor: "pointer",
          }}
          my={10}>
          <Box h={"75%"}>
            <Image
              src={googleMap}
              h={"100%"}
              style={{
                borderTopLeftRadius: "1rem",
                borderTopRightRadius: "1rem",
              }}
            />
          </Box>
          <Stack h={"25%"} align='center' justify='center'>
            <Anchor
              href='https://mantine.dev/'
              target='_blank'
              ta={"center"}
              fz={13}
              fw={600}>
              View on a map
            </Anchor>
          </Stack>
        </Box>

        <form onSubmit={handleSubmit}>
          <Stack spacing='md'>
            <Select
              label={"Location"}
              data={cities}
              radius={"md"}
              value={location}
              limit={5}
              onChange={onChange1}
              searchable
            />
            <DatePickerInput
              valueFormat='YYYY MMM DD'
              label={"CheckIn"}
              radius={"md"}
              minDate={new Date()}
              value={new Date(checkIn)}
              onChange={onChange2}
            />
            <DatePickerInput
              valueFormat='YYYY MMM DD'
              label={"CheckOut"}
              radius={"md"}
              minDate={new Date()}
              value={new Date(checkOut)}
              onChange={onChange3}
            />
            <Select
              label={"Guest"}
              radius={"md"}
              data={["1", "2", "3", "4", "5"]}
              value={guest}
              onChange={onChange4}
            />
            <Button type='submit' bg={"#1668e3"} fullWidth radius={"xl"}>
              Search
            </Button>
          </Stack>
        </form>
      </Box>

      <Divider mb='md' />

      <Stack spacing='md' gap={5}>
        <Title order={4}>Your budget (Per night)</Title>
        <Group>
          <Text>£{price[0]}</Text> - <Text>£{price[1]}</Text>
        </Group>
        <RangeSlider
          size='md'
          showLabelOnHover={false}
          min={1}
          max={10000}
          step={1}
          value={price}
          onChange={setPrice}
        />
      </Stack>

      <Divider my='md' />
      <Stack spacing='md'>
        <Title order={4}>Popular Searches</Title>
        <Checkbox label='Budget hostel' />
        <Checkbox label='Breakfast included' />
        <Checkbox label='Free airport shuttle' />
        <Checkbox label='Pet friendly' />
      </Stack>

      <Divider my='md' />

      <Stack spacing='md'>
        <Title order={4}>Property Class</Title>
        <Group>
          {["Any", "5", "4", "3", "2", "1"].map((star, index) => (
            <Badge
              key={index}
              variant='filled'
              color={selectedStar === star ? "blue" : "gray"}
              size='lg'
              onClick={() => handleStarClick(star)}
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}>
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

SearchNav.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default SearchNav;
