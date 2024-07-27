import { Container, Grid, SimpleGrid, Skeleton, rem } from "@mantine/core";

const PRIMARY_COL_HEIGHT = rem(350);

function HostelImages() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;
  return (
    <Container my="md" maw={"1200px"} w={"100%"} mt={20}>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md" w={"100%"}>
        <Skeleton height={PRIMARY_COL_HEIGHT} radius="lg" animate={false} />
        <Grid gutter="md">
          <Grid.Col span={6}>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="lg"
              animate={false}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="lg"
              animate={false}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="lg"
              animate={false}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="lg"
              animate={false}
            />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}

export default HostelImages;
