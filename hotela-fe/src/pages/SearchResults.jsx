import { Box, Button, Flex, Modal } from "@mantine/core";
import { useState } from "react";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import SearchNav from "../features/searchResult/SearchNav";
import SearchMain from "../features/searchResult/SearchMain";

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
          {isMobile && (
            <Button
              display={{ base: "block", md: "none" }}
              onClick={() => open()}
            >
              Show nav
            </Button>
          )}
          <SearchMain />
        </Box>
      </Flex>

      {isMobile && (
        <Modal opened={opened} onClose={close} fullScreen>
          <SearchNav />
        </Modal>
      )}
    </Box>
  );
}

export default SearchResults;
