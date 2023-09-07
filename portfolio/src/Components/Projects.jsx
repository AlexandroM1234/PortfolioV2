import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { ProjectDetails } from "../constants/constants.js";
import React, { forwardRef } from "react";
import ProjectCard from "./ProjectCard.jsx";

const Projects = (_, ref) => {
  return (
    <>
      <Box ref={ref} height={"2xl"}>
        <Flex justifyContent={"center"} direction={"column"} align={"center"}>
          <Text fontSize={"4xl"}>Projects</Text>
          <VStack spacing={4} align={"center"}>
            {ProjectDetails.map((project) => (
              <ProjectCard project={project} />
            ))}
          </VStack>
        </Flex>
      </Box>
    </>
  );
};

export default forwardRef(Projects);
