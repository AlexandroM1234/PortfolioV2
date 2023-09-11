import { Flex, SimpleGrid, Text, Box, Heading } from "@chakra-ui/react";
import {
  ABOUT_ME,
  ABOUT_ME_HEADER,
  SKILLS,
  Skills,
} from "../constants/constants";
import React, { forwardRef } from "react";
import TechCard from "./TechCard";
import { motion, useInView } from "framer-motion";

const About = (_, ref) => {
  const isInView = useInView(ref);

  return (
    <>
      <Box ref={ref} minHeight={"100vh"} marginY={1}>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: isInView ? 1 : 0, scale: 1 }}
          transition={{ duration: 0.75 }}
        >
          <Flex justifyContent={"space-evenly"} width={"100%"}>
            <Flex direction={"column"} width={"lg"} textAlign={"left"}>
              <Heading>{ABOUT_ME_HEADER}</Heading>
              <Text>{ABOUT_ME}</Text>
            </Flex>
            <Flex direction={"column"} textAlign={"left"}>
              <Heading>{SKILLS}</Heading>
              <SimpleGrid columns={2} spacing={3}>
                {Skills.map((item) => (
                  <TechCard name={item.name} icon={item.icon} />
                ))}
              </SimpleGrid>
            </Flex>
          </Flex>
        </motion.div>
      </Box>
    </>
  );
};

export default forwardRef(About);
