import { Carousel } from "@mantine/carousel";

function Demo() {
  return (
    <Carousel
      withIndicators
      bg="blue"
      height={200}
      slideSize="33.333333%"
      align="start"
      slideGap="xl"
      loop
      slidesToScroll={1}
    >
      <Carousel.Slide w={100} bg="red">
        1
      </Carousel.Slide>
      <Carousel.Slide w={100} bg="red">
        2
      </Carousel.Slide>
      <Carousel.Slide w={100} bg="red">
        3
      </Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
export default Demo;
