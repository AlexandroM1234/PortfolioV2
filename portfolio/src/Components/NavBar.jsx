import React from "react";
import { Button, Flex, Heading, Stack, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { ABOUT, EXPERIENCE, PROJECTS } from "../constants/constants";
import AnimatedButton from "./animated/AnimatedButton";

const NavBar = () => {
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
        </Stack>
        <Stack direction="row">
          <AnimatedButton>
            <Button variant="ghost">{ABOUT}</Button>
          </AnimatedButton>
          <AnimatedButton>
            <Button variant="ghost">{EXPERIENCE}</Button>
          </AnimatedButton>
          <AnimatedButton>
            <Button variant="ghost">{PROJECTS}</Button>
          </AnimatedButton>
          <AnimatedButton>
            <Button
              variant="ghost"
              onClick={toggleColorMode}
              aria-label={`Toggle color mode to: ${
                colorMode === "light" ? "dark" : "light"
              }`}
            >
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </AnimatedButton>
        </Stack>
      </Flex>
    </>
  );
};

export default NavBar;
