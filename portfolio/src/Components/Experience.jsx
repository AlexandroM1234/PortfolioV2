import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { EXPERIENCE, JobExperience } from "../constants/constants.js";
import ExperienceCard from "./ExperienceCard.jsx";

const Experience = (_, ref) => {
  return (
    <>
      <Box ref={ref} height={"100vh"} marginY={1}>
        <Flex align={"center"} direction={"column"}>
          <Heading>{EXPERIENCE}</Heading>
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
