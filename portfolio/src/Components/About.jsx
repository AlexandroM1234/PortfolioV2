import { Flex, SimpleGrid, Text, Heading } from "@chakra-ui/react";
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
      <Flex
        ref={ref}
        height={"100vh"}
        width={"100%"}
        align={"center"}
        justifyContent={"center"}
      >
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: isInView ? 1 : 0, scale: 1 }}
          transition={{ duration: 0.75 }}
        >
          <Flex
            justifyContent={"space-evenly"}
            direction={["column", "column", "row"]}
            padding={10}
          >
            <Flex
              direction={"column"}
              width={["sm", "md", "lg"]}
              textAlign={["center", "center", "left"]}
              padding={5}
            >
              <Heading marginY={1}>{ABOUT_ME_HEADER}</Heading>
              <Text>{ABOUT_ME}</Text>
            </Flex>
            <Flex
              direction={"column"}
              textAlign={["center", "center", "left"]}
              padding={2}
            >
              <Heading marginY={1}>{SKILLS}</Heading>
              <SimpleGrid columns={2} spacing={3}>
                {Skills.map((item) => (
                  <TechCard name={item.name} icon={item.icon} />
                ))}
              </SimpleGrid>
            </Flex>
          </Flex>
        </motion.div>
      </Flex>
    </>
  );
};

export default forwardRef(About);
