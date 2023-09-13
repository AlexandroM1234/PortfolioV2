import React from "react";
import {
  Avatar,
  Button,
  Flex,
  Stack,
  useColorMode,
  Heading,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import { ABOUT, EXPERIENCE, MY_NAME, PROJECTS } from "../constants/constants";
import { motion } from "framer-motion";

const NavBar = ({ handleScroll, aboutRef, experienceRef, projectsRef }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Flex
        justifyContent="space-between"
        w={"100%"}
        padding={2}
        backgroundColor={colorMode === "dark" ? "gray.900" : "white"}
        position={"fixed"}
        boxShadow={"base"}
        top={0}
      >
        <Stack
          marginX={1}
          w={"100%"}
          align={"center"}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Flex align={"center"}>
            <Avatar showBorder name="Alex Martinez" src="/me.png" />
            <Heading marginLeft={1} size="md">
              {MY_NAME}
            </Heading>
          </Flex>
          <Button display={["contents", "contents", "none"]}>
            <HamburgerIcon />
          </Button>
        </Stack>
        <Stack direction="row" display={["none", "none", "contents"]}>
          <Button
            as={motion.button}
            whileHover={{ scale: 1.1 }}
            onClick={() => handleScroll(aboutRef)}
            variant="ghost"
            marginX={1}
          >
            {ABOUT}
          </Button>
          <Button
            as={motion.button}
            whileHover={{ scale: 1.1 }}
            onClick={() => handleScroll(experienceRef)}
            variant="ghost"
            marginX={1}
          >
            {EXPERIENCE}
          </Button>
          <Button
            as={motion.button}
            whileHover={{ scale: 1.1 }}
            onClick={() => handleScroll(projectsRef)}
            variant="ghost"
            marginX={1}
          >
            {PROJECTS}
          </Button>
          <Button
            as={motion.button}
            whileHover={{ scale: 1.1 }}
            variant="ghost"
            onClick={toggleColorMode}
            aria-label={`Toggle color mode to: ${
              colorMode === "light" ? "dark" : "light"
            }`}
            marginX={1}
          >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Stack>
      </Flex>
    </>
  );
};

export default NavBar;
