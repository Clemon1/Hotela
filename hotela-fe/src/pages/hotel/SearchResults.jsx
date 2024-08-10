import { Box, Flex, Modal } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import SearchNav from "../../components/features/searchResult/SearchNav";
import SearchMain from "../../components/features/searchResult/SearchMain";

function SearchResults() {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery("(max-width: 991px)");

  return (
    <Box w={"100%"} mb={20} h={"100%"}>
      <Flex w={"100%"} gap={0} h={"100%"}>
        <Box w={"25%"} h={"100%"} display={{ base: "none", md: "block" }}>
          <SearchNav />
        </Box>
        <Box w={{ base: "100%", md: "75%" }} h={"100%"}>
          <SearchMain onOpen={open} />
        </Box>
      </Flex>

      {isMobile && (
        <Modal
          opened={opened}
          onClose={close}
          fullScreen
          withCloseButton={false}
        >
          <SearchNav onClose={close} />
        </Modal>
      )}
    </Box>
  );
}

export default SearchResults;
