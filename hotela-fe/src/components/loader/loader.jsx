import { Flex, Loader } from "@mantine/core";

const Loading = () => {
  return (
    <Flex
      w={"100%"}
      h={"100vh"}
      align={"center"}
      justify={"center"}
      bg={"#ffffff"}>
      <Loader color='rgb(22, 104, 227)' size='xl' />;
    </Flex>
  );
};

export default Loading;
