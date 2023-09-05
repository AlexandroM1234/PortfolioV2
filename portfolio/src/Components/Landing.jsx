import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { TITLE, WELCOME } from "../constants/constants";

function Landing() {
  return (
    <>
      <Flex
        justify={"center"}
        direction={"column"}
        align={"center"}
        height={"2xl"}
      >
        <Flex direction={"column"} alignItems={"center"}>
          <Text fontSize={"6xl"}>{WELCOME}</Text>
          <Text fontSize={"4xl"}>{TITLE}</Text>
        </Flex>
      </Flex>
    </>
  );
}

export default Landing;
