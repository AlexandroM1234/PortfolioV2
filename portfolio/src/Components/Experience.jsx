import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { EXPERIENCE, JobExperience } from "../constants/constants.js";
import ExperienceCard from "./ExperienceCard.jsx";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

const Experience = (_, ref) => {
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
          <Flex align={"center"} direction={"column"}>
            <Heading>{EXPERIENCE}</Heading>
            <VStack align={"center"} spacing={4}>
              {JobExperience.map((job) => (
                <ExperienceCard job={job} />
              ))}
            </VStack>
          </Flex>
        </motion.div>
      </Box>
    </>
  );
};

export default forwardRef(Experience);
