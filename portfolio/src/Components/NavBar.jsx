import React from "react";
import { Button, Flex, Heading, Stack, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Flex
        justifyContent="space-between"
        w="100%"
        padding={2}
        backgroundColor={"blackAlpha.300"}
        position={"fixed"}
      >
        <Stack direction="row">
          <Heading>A M</Heading>
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Experience</Button>
          <Button variant="ghost">Projects</Button>
        </Stack>
        <Stack direction="row">
          <Button
            variant="ghost"
            onClick={toggleColorMode}
            aria-label={`Toggle color mode to: ${
              colorMode === "light" ? "dark" : "light"
            }`}
          >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Stack>
      </Flex>
    </>
  );
}

export default NavBar;
