import React from "react";
import {
  Avatar,
  Button,
  Flex,
  Stack,
  useColorMode,
  Heading,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
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
          direction={["row-reverse", "row-reverse", "row"]}
        >
          <Avatar showBorder name="Alex Martinez" src="/me.png" />
          <Heading size="md">{MY_NAME}</Heading>
        </Stack>
        <Stack direction="row" display={["none", "none", "contents"]}>
          <Button
            as={motion.button}
            whileHover={{ scale: 1.1 }}
            onClick={() => handleScroll(aboutRef)}
            variant="ghost"
          >
            {ABOUT}
          </Button>
          <Button
            as={motion.button}
            whileHover={{ scale: 1.1 }}
            onClick={() => handleScroll(experienceRef)}
            variant="ghost"
          >
            {EXPERIENCE}
          </Button>
          <Button
            as={motion.button}
            whileHover={{ scale: 1.1 }}
            onClick={() => handleScroll(projectsRef)}
            variant="ghost"
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
          >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Stack>
      </Flex>
    </>
  );
};

export default NavBar;
