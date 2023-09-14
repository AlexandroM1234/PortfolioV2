import React from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ABOUT, EXPERIENCE, PROJECTS } from "../constants/constants";

const HamburgerMenu = ({
  onClose,
  isOpen,
  handleScroll,
  aboutRef,
  experienceRef,
  projectsRef,
  toggleColorMode,
  colorMode,
}) => {
  const handleCloseAndScroll = (onClose, handleScroll, ref) => {
    onClose();
    handleScroll(ref);
  };

  return (
    <>
      <Drawer isOpen={isOpen} placement="right" size={"xs"} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"stretch"}
          >
            <Button
              as={motion.button}
              whileHover={{ scale: 1.1 }}
              onClick={() =>
                handleCloseAndScroll(onClose, handleScroll, aboutRef)
              }
              variant="ghost"
              marginX={1}
            >
              {ABOUT}
            </Button>
            <Button
              as={motion.button}
              whileHover={{ scale: 1.1 }}
              onClick={() =>
                handleCloseAndScroll(onClose, handleScroll, experienceRef)
              }
              variant="ghost"
              marginX={1}
            >
              {EXPERIENCE}
            </Button>
            <Button
              as={motion.button}
              whileHover={{ scale: 1.1 }}
              onClick={() =>
                handleCloseAndScroll(onClose, handleScroll, projectsRef)
              }
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
              {colorMode === "light" ? "Dark Mode" : "Light Mode"}
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default HamburgerMenu;
