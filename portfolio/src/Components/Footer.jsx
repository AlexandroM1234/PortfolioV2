import { Stack, Text, Link, Icon, Flex } from "@chakra-ui/react";
import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
import { COPYRIGHT } from "../constants/constants";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <Flex
      position={"absolute"}
      bottom={"0"}
      left={"0"}
      right={"0"}
      justifyContent={"space-between"}
      padding={"2"}
      marginY={"2"}
    >
      <div className="trademark">
        <Text>{COPYRIGHT}</Text>
      </div>

      <div className="icons">
        <Stack direction={"row"}>
          <Link
            as={motion.a}
            whileHover={{ scale: 1.1 }}
            className="chakra-button css-1nlwyv4"
            href="https://www.linkedin.com/in/alex-martinez123/"
            aria-label="Link to Alex Martinez's LinkedIn"
          >
            <Icon boxSize={6} as={SiLinkedin} />
          </Link>
          <Link
            as={motion.a}
            whileHover={{ scale: 1.1 }}
            className="chakra-button css-1nlwyv4"
            href="https://github.com/AlexandroM1234"
            aria-label="Link to Alex-Martinez's LinkedIn"
          >
            <Icon boxSize={6} as={SiGithub} />
          </Link>
          <Link
            as={motion.a}
            whileHover={{ scale: 1.1 }}
            className="chakra-button css-1nlwyv4"
            href="mailto:alexmartinez0071234@gmail.com"
            variant="ghost"
          >
            <Icon boxSize={6} as={AiOutlineMail} mr={"1"} />
          </Link>
        </Stack>
      </div>
    </Flex>
  );
};

export default Footer;
