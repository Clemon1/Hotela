import { Box, Grid, Image } from "@mantine/core";
import hotelDetails1 from "../../assets/hotelDetails1.jpg";

function HotelPictures() {
  const child = (
    // <Skeleton height={250} radius="md" animate={false}>
    <Image src={hotelDetails1} h={250} radius="lg" animate={false} />
    // </Skeleton>
  );

  return (
    <Box my="md">
      <Grid>
        <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 8 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 8 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 3 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 3 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 6 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 6 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 6 }}>{child}</Grid.Col>
      </Grid>
    </Box>
  );
}

export default HotelPictures;
