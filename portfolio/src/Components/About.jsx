import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { TechStack } from "../constants/constants";
import React from "react";
import TechCard from "./TechCard";

function About() {
  return (
    <>
      <Flex
        justifyContent={"center"}
        height={"2xl"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Text fontSize={"4xl"}>About Me</Text>

        <Flex textAlign={"center"} flexDirection={"column"}>
          <Text>
            I am a Full-Stack Engineer with a focus on the frontend based out of
            Virginia. Outside of sitting in my room and coding I like to
            workout, play video games and listen to music.
          </Text>
          <Text>Tech Stack</Text>
          <SimpleGrid columns={2} spacing={3}>
            {TechStack.map((item) => (
              <TechCard name={item.name} icon={item.icon} />
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  );
}

export default About;
