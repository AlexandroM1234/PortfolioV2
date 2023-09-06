import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { ProjectDetails } from "../constants/constants.js";
import React from "react";
import ProjectCard from "./ProjectCard.jsx";

function Projects() {
  return (
    <>
      <Box height={"2xl"}>
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
}

export default Projects;
