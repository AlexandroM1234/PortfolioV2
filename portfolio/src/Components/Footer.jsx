import { Stack, Text, Icon, Flex, Button } from "@chakra-ui/react";
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
          <Button
            as={motion.a}
            whileHover={{ scale: 1.1 }}
            href="https://www.linkedin.com/in/alex-martinez123/"
            target="_blank"
            aria-label="Link to Alex Martinez's LinkedIn"
            variant={"ghost"}
          >
            <Icon boxSize={6} as={SiLinkedin} />
          </Button>
          <Button
            as={motion.a}
            whileHover={{ scale: 1.1 }}
            href="https://github.com/AlexandroM1234"
            target="_blank"
            aria-label="Link to Alex-Martinez's LinkedIn"
            variant={"ghost"}
          >
            <Icon boxSize={6} as={SiGithub} />
          </Button>
          <Button
            as={motion.a}
            whileHover={{ scale: 1.1 }}
            href="mailto:alexmartinez0071234@gmail.com"
            aria-label="Email Me"
            target="_blank"
            variant="ghost"
          >
            <Icon boxSize={6} as={AiOutlineMail} mr={"1"} />
          </Button>
        </Stack>
      </div>
    </Flex>
  );
};

export default Footer;
