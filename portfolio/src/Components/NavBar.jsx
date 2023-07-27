import React from "react";
import {
  Button,
  Flex,
  Heading,
  Stack,
  useColorMode,
  Icon,
  Link,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { SiGithub, SiLinkedin } from "react-icons/si";

function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Flex justifyContent="space-between" w="100%">
        <Heading>Alex Martinez</Heading>
        <Stack direction="row">
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Experience</Button>
          <Button variant="ghost">Projects</Button>
          <Button variant="ghost">Contact</Button>
        </Stack>
        <Stack direction="row">
          <Link
            className="chakra-button css-1nlwyv4"
            href="https://www.linkedin.com/in/alex-martinez123/"
            aria-label="Link to Alex Martinez's LinkedIn"
          >
            <Icon boxSize={6} as={SiLinkedin} />
          </Link>
          <Link
            className="chakra-button css-1nlwyv4"
            href="https://github.com/AlexandroM1234"
            aria-label="Link to Alex-Martinez's LinkedIn"
          >
            <Icon boxSize={6} as={SiGithub} />
          </Link>
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
