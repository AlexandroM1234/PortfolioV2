import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { TITLE, WELCOME } from "../constants/constants";

const Landing = () => {
  return (
    <Flex
      justify={"center"}
      direction={"column"}
      align={"center"}
      height={"100vh"}
      width={"100%"}
      padding={1}
    >
      <Flex
        direction={"column"}
        alignItems={"center"}
        width={"100%"}
        textAlign={"center"}
      >
        <Text fontSize={["5xl", "5xl", "6xl"]}>{WELCOME}</Text>
        <Text fontSize={["4xl", "4xl", "5xl"]}>{TITLE}</Text>
      </Flex>
    </Flex>
  );
};

export default Landing;
