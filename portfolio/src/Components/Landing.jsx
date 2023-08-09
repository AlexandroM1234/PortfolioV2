import React from "react";
import { Flex, Text } from "@chakra-ui/react";

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
          <Text fontSize={"6xl"}>Hi, I'm Alex</Text>
          <Text fontSize={"4xl"}>I'm a Full-Stack Software Engineer</Text>
        </Flex>
      </Flex>
    </>
  );
}

export default Landing;