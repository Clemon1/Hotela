import { Container, Grid, SimpleGrid, rem, Image, Box } from "@mantine/core";

import hotelDetails1 from "../../assets/hotelDetails1.jpg";

const PRIMARY_COL_HEIGHT = rem(350);

function HostelImages() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;
  return (
    <Container my="md" maw={"1200px"} w={"100%"} mt={20}>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md" w={"100%"}>
        <Box h={PRIMARY_COL_HEIGHT}>
          <Image
            src={hotelDetails1}
            h="100%"
            radius="lg"
            style={{ objectFit: "cover" }}
          />
        </Box>

        <Grid gutter="md">
          <Grid.Col span={6}>
            <Box h={SECONDARY_COL_HEIGHT}>
              <Image
                src={hotelDetails1}
                h="100%"
                radius="lg"
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Grid.Col>
          <Grid.Col span={6}>
            <Box h={SECONDARY_COL_HEIGHT}>
              <Image
                src={hotelDetails1}
                h="100%"
                radius="lg"
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Grid.Col>
          <Grid.Col span={6}>
            <Box h={SECONDARY_COL_HEIGHT}>
              <Image
                src={hotelDetails1}
                h="100%"
                radius="lg"
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Grid.Col>
          <Grid.Col span={6}>
            <Box h={SECONDARY_COL_HEIGHT}>
              <Image
                src={hotelDetails1}
                h="100%"
                radius="lg"
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}

export default HostelImages;
