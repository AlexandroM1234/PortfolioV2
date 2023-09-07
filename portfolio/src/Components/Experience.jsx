import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { JobExperience } from "../constants/constants.js";
import ExperienceCard from "./ExperienceCard.jsx";

const Experience = (_, ref) => {
  return (
    <>
      <Box ref={ref} height={"2xl"}>
        <Flex align={"center"} direction={"column"}>
          <Text fontSize={"4xl"}>Experience</Text>
          <VStack align={"center"} spacing={4}>
            {JobExperience.map((job) => (
              <ExperienceCard job={job} />
            ))}
          </VStack>
        </Flex>
      </Box>
    </>
  );
};

export default forwardRef(Experience);
