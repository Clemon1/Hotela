import { Box, Group, Image, Stack, Text, Title } from "@mantine/core";
import { IoWifi, IoCarSport, IoFitness, IoWater, IoBed } from "react-icons/io5";
import googleMap from "../../assets/googleMap.jpg";

const features = [
  { icon: IoWifi, label: "Free Wifi" },
  { icon: IoCarSport, label: "Parking" },
  { icon: IoFitness, label: "Gym" },
  { icon: IoWater, label: "Swimming Pool" },
  { icon: IoBed, label: "24/7 Reception" },
];

function chunkArray(array, chunkSize) {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

function Overview() {
  const featureChunks = chunkArray(features, 4);

  return (
    <Box
      mt={20}
      p={30}
      style={{ backgroundColor: "#f8f9fa", borderRadius: "10px" }}>
      <Group align='start' justify='space-between'>
        <Box>
          <Title order={2} mb={20}>
            Property Overview
          </Title>
          <Group align='start' gap={{ base: 0, sm: 50 }}>
            {featureChunks.map((chunk, chunkIndex) => (
              <Stack key={chunkIndex} spacing='lg'>
                {chunk.map((feature, index) => (
                  <Group key={index}>
                    <feature.icon size={20} />
                    <Text fz={14}>{feature.label}</Text>
                  </Group>
                ))}
              </Stack>
            ))}
          </Group>
        </Box>
        <Image
          src={googleMap}
          alt='Google Map'
          width={400}
          height={200}
          radius='lg'
          style={{ objectFit: "cover" }}
        />
      </Group>
    </Box>
  );
}

export default Overview;
