import { Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { JobExperience } from "../constants/constants.js";
import ExperienceCard from "./ExperienceCard.jsx";

function Experience() {
  return (
    <>
      <Flex height={"2xl"} align={"center"} direction={"column"}>
        <Text fontSize={"4xl"}>Experience</Text>
        <VStack align={"center"} spacing={4}>
          {JobExperience.map((job) => (
            <ExperienceCard job={job} />
          ))}
        </VStack>
      </Flex>
    </>
  );
}

export default Experience;
