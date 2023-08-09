import { Stack, Text, Link, Icon, Flex } from "@chakra-ui/react";
import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <>
      <Flex justifyContent={"space-between"} padding={"2"}>
        <div className="trademark">
          <Text>@2023 Alexandro Martinez</Text>
        </div>

        <div className="icons">
          <Stack direction={"row"}>
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
            <Link
              className="chakra-button css-1nlwyv4"
              href="mailto:alexmartinez0071234@gmail.com"
              variant="ghost"
            >
              <Icon boxSize={6} as={AiOutlineMail} mr={"1"} />
            </Link>
          </Stack>
        </div>
      </Flex>
    </>
  );
}

export default Footer;