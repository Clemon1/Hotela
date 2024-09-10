import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Image,
  Loader,
  NumberFormatter,
  SimpleGrid,
  Text,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Layout from "../../components/layout";
import { Link, useParams } from "react-router-dom";
import { useSingleHotelQuery } from "../../redux/RTK_Query/hotelSlice";

const HotelDetails = () => {
  const { id } = useParams();
  const { data: hotel, isLoading } = useSingleHotelQuery(`${id}`);
  console.log("rooms", hotel);

  return (
    <Layout>
      <>
        <Flex w={"100%"} justify={"center"} flex={1}>
          {isLoading ? (
            <>
              <Card
                radius={"md"}
                w={"100%"}
                h={"100vh"}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <Loader color='teal' size='lg' type='dots' />;
              </Card>
            </>
          ) : (
            <Card
              w={"100%"}
              radius={"md"}
              p={5}
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
              }}>
              <Flex w={"100%"} p={4} direction={"column"} gap={15} flex={1}>
                <Flex
                  w={"100%"}
                  h={"100%"}
                  align={"center"}
                  justify={"space-between"}>
                  <Flex direction={"column"}>
                    <Text fw={700} fz={19}>
                      {hotel?.hotel?.name}
                    </Text>
                    <Badge variant='dot' color='teal' size='xl'>
                      £{hotel?.hotel?.price}
                    </Badge>
                  </Flex>
                  <Flex gap={10} align={"center"}>
                    <Flex direction={"column"} gap={0}>
                      <Text fw={600} fz={18} lh={1}>
                        <NumberFormatter
                          prefix='₦'
                          value={hotel?.price}
                          thousandSeparator
                        />
                      </Text>
                    </Flex>
                    <Link to={`/newroom/${hotel?.hotel?._id}`}>
                      <Button bg={"teal"} radius={"md"}>
                        Add Room
                      </Button>
                    </Link>
                  </Flex>
                </Flex>
                <SimpleGrid cols={2} w={"100%"} h={"70vh"}>
                  <Box h={"60vh"}>
                    <Image
                      w={"100%"}
                      h={"100%"}
                      radius={"md"}
                      src={`http://localhost:5000/${hotel?.hotel?.images?.[0]}`}
                      style={{
                        objectPosition: "center",
                      }}
                    />
                  </Box>
                  <Carousel
                    height={"60vh"}
                    loop
                    styles={{
                      root: {
                        borderRadius: "20px",
                        overflow: "hidden",
                      },
                    }}
                    controlSize={40}
                    withIndicators>
                    {hotel?.hotel?.images?.map((url, i) => (
                      <Carousel.Slide key={i}>
                        <Image
                          src={`http://localhost:5000/${url}`}
                          alt='Hotel Detail 1'
                          radius='md'
                          height={"100%"}
                          style={{ borderRadius: "8px" }}
                        />
                      </Carousel.Slide>
                    ))}
                  </Carousel>
                </SimpleGrid>
                <SimpleGrid cols={1} w={"100%"}>
                  <Flex direction={"column"}>
                    <Text fz={19} fw={600}>
                      Room Amenities
                    </Text>
                    <Flex wrap={"wrap"} gap={10} w={"100%"}>
                      {hotel?.hotel?.amenities?.map((p) => (
                        <Badge
                          key={p}
                          variant='dot'
                          radius={"lg"}
                          color='cyan'
                          c='rgb(23, 42, 58)'
                          fw={600}
                          fz={13}
                          w={""}
                          size='lg'
                          style={{
                            flexGrow: 1,
                            flexBasis: 150,
                          }}>
                          {p}
                        </Badge>
                      ))}
                    </Flex>
                  </Flex>
                  <Flex direction={"column"}>
                    <Text fz={19} fw={600}>
                      Description
                    </Text>
                    <Text fz={16} fw={500}>
                      {hotel?.hotel?.description}
                    </Text>
                  </Flex>
                </SimpleGrid>
              </Flex>
            </Card>
          )}
        </Flex>
      </>
    </Layout>
  );
};

export default HotelDetails;
