import {
  Box,
  Stack,
  Text,
  Title,
  Group,
  Divider,
  Anchor,
  Button,
  Paper,
} from "@mantine/core";
import {
  IoCall,
  IoMail,
  IoLocationSharp,
  IoCalendar,
  IoCheckmarkCircleSharp,
} from "react-icons/io5";

function Info() {
  return (
    <Box
      mt={20}
      px={20}
      py={30}
      style={{ backgroundColor: "#f8f9fa", borderRadius: "10px" }}
    >
      <Title order={2} mb={20} style={{ color: "#2c3e50" }}>
        About Radisson Hotel Casa Grande
      </Title>
      <Text mb={20} fz={"sm"} style={{ lineHeight: 1.6 }}>
        Stay at the Best of Hotels in Casa Grande, AZ now 100% Non-Smoking. If
        you want to avoid the hustle and bustle of a big city but remain close
        by, head to the Holiday Inn Casa Grande which is just a short drive from
        both Phoenix and Tucson. Business travelers love staying at our hotel in
        Casa Grande because it's located near such companies as Nissan Technical
        Center North, Frito-Lay, Hexcel Corp, a Wal-Mart Distribution Center and
        coming soon the brand new Phoenix Mart. We offer 5,796 square feet of
        event space for meetings, as well as a state-of-the-art Business Center
        with copy, fax and print services. Stay with us, and you'll never miss a
        beat from the office. Families love traveling from our hotel to the Casa
        Grande Ruins, the largest prehistoric structure in North America. In
        addition, Skydive Arizona presents guests with a unique chance to soar
        high above Arizona and we are close to both the Wild Horse Pass Casino
        and Harrah's Ak Chin Casino. Whether business or pleasure brings you to
        Casa Grande, our hotel's free high-speed wireless Internet access keeps
        you connected and all of our rooms have brand new 37 inch LCD TVs.
        Cabo's Bar and Grill, our on-site eatery, features a Southwestern menu
        with delicious prime rib and famous fajitas. With an exceptionally
        friendly and professional staff that exceeds your every expectation,
        it's easy to see why we're one of the best hotels in Casa Grande, AZ.
      </Text>

      <Divider my="lg" />

      <Paper
        shadow="xs"
        p="md"
        mb={20}
        style={{ backgroundColor: "#fff", borderRadius: "10px" }}
      >
        <Group align="center">
          <IoCalendar size={30} color="#3498db" />
          <Stack spacing={0}>
            <Text fw={600} size="lg">
              Arrival / Departure
            </Text>
            <Text size="sm">Check in: 15:00</Text>
            <Text size="sm">Check out: 11:00</Text>
          </Stack>
        </Group>
      </Paper>

      <Paper
        shadow="xs"
        p="md"
        mb={20}
        style={{ backgroundColor: "#fff", borderRadius: "10px" }}
      >
        <Group align="center">
          <IoLocationSharp size={30} color="#3498db" />
          <Stack spacing={0}>
            <Text fw={600} size="lg">
              Location
            </Text>
            <Text size="sm">123 Main Street, Casa Grande, AZ</Text>
          </Stack>
        </Group>
      </Paper>

      <Paper
        shadow="xs"
        p="md"
        mb={20}
        style={{ backgroundColor: "#fff", borderRadius: "10px" }}
      >
        <Group align="center">
          <IoCall size={30} color="#3498db" />
          <Stack spacing={0}>
            <Text fw={600} size="lg">
              Contact
            </Text>
            <Text size="sm">Telephone: +1 (520) 426-3500</Text>
            <Text size="sm">Fax: +1 (520) 836-4728</Text>
          </Stack>
        </Group>
      </Paper>

      <Paper
        shadow="xs"
        p="md"
        mb={20}
        style={{ backgroundColor: "#fff", borderRadius: "10px" }}
      >
        <Group align="center">
          <IoMail size={30} color="#3498db" />
          <Stack spacing={0}>
            <Text fw={600} size="lg">
              Email
            </Text>
            <Text size="sm">info@radissonhotel.com</Text>
          </Stack>
        </Group>
      </Paper>

      <Anchor href="https://www.radissonhotel.com" target="_blank" mt={20}>
        <Button
          variant="light"
          color="blue"
          leftIcon={<IoCheckmarkCircleSharp />}
        >
          Visit Official Site
        </Button>
      </Anchor>
    </Box>
  );
}

export default Info;
