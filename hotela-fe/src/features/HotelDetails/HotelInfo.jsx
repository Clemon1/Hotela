import { Badge, Box, Group, Stack, Tabs, Text, Title } from "@mantine/core";
import Overview from "./Overview";
import Info from "./Info";
import ReviewCard from "./ReviewCard";
import HotelPictures from "./HotelPictures";

function HotelInfo() {
  //   const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <Box style={{ gap: "20px", display: "flex", flexDirection: "column" }}>
      <Group justify="space-between" align="center">
        <Stack justify="center" gap="0">
          <Title order={2}>Hotel Norrebro</Title>
          <Text fz={14}>3-star hotel located in the heart of london</Text>
        </Stack>
        <Group gap={8}>
          <Stack align="end" justify="center" gap="0">
            <Text fz={16} c={"green"} fw={600}>
              Excellent
            </Text>
            <Text fz={11} c={"gray"}>
              1000 reviews
            </Text>
          </Stack>
          <Badge variant="light" color="green">
            9.6
          </Badge>
        </Group>
      </Group>

      <Tabs defaultValue="Overview" mb={30}>
        <Tabs.List style={{ gap: "0px" }}>
          <Tabs.Tab
            value="Overview"
            // leftSection={<IconPhoto style={iconStyle} />}
          >
            Overview
          </Tabs.Tab>
          <Tabs.Tab
            value="Info"
            // leftSection={<IconMessageCircle style={iconStyle} />}
          >
            Info
          </Tabs.Tab>
          <Tabs.Tab
            value="Photos"
            // leftSection={<IconAmenities style={iconStyle} />}
          >
            Photos
          </Tabs.Tab>
          <Tabs.Tab
            value="reviews"
            // leftSection={<IconAmenities style={iconStyle} />}
          >
            Reviews
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="Overview">
          <Overview />
        </Tabs.Panel>

        <Tabs.Panel value="Info">
          <Info />
        </Tabs.Panel>

        <Tabs.Panel value="Photos">
          <HotelPictures />
        </Tabs.Panel>

        <Tabs.Panel value="reviews">
          <ReviewCard />
        </Tabs.Panel>
      </Tabs>
    </Box>
  );
}

export default HotelInfo;
