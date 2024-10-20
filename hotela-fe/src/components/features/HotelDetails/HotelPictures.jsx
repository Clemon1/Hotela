/* eslint-disable react/prop-types */
import { Box, Grid, Image } from "@mantine/core";
import hotelDetails1 from "../../../assets/hotelDetails1.jpg";

function HotelPictures({ images }) {
  const serverURL2 = import.meta.env.VITE_serverURL2;

  return (
    <Box my='md'>
      <Grid>
        {images?.map((url, i) => (
          <Grid.Col span={{ base: 6, xs: 4 }} key={i}>
            <Image
              src={`${serverURL2}/${url}`}
              h={250}
              radius='lg'
              animate={false}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
}

export default HotelPictures;
