import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import { PROJECTS, ProjectDetails } from "../constants/constants.js";
import React, { forwardRef } from "react";
import ProjectCard from "./ProjectCard.jsx";

const Projects = (_, ref) => {
  return (
    <>
      <Box ref={ref} height={"100vh"} marginY={1}>
        <Flex justifyContent={"center"} direction={"column"} align={"center"}>
          <Heading>{PROJECTS}</Heading>
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
