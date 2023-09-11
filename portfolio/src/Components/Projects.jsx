import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import { PROJECTS, ProjectDetails } from "../constants/constants.js";
import React, { forwardRef } from "react";
import ProjectCard from "./ProjectCard.jsx";
import { motion, useInView } from "framer-motion";

const Projects = (_, ref) => {
  const isInView = useInView(ref);
  return (
    <>
      <Box ref={ref} height={"100vh"} marginY={1}>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: isInView ? 1 : 0, scale: 1 }}
          transition={{ duration: 0.75 }}
        >
          <Flex justifyContent={"center"} direction={"column"} align={"center"}>
            <Heading>{PROJECTS}</Heading>
            <VStack spacing={4} align={"center"}>
              {ProjectDetails.map((project) => (
                <ProjectCard project={project} />
              ))}
            </VStack>
          </Flex>
        </motion.div>
      </Box>
    </>
  );
};

export default forwardRef(Projects);
