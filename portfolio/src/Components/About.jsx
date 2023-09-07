import { Flex, SimpleGrid, Text, Box } from "@chakra-ui/react";
import {
  ABOUT_ME,
  ABOUT_ME_HEADER,
  SKILLS,
  Skills,
} from "../constants/constants";
import React, { forwardRef } from "react";
import TechCard from "./TechCard";

const About = (_, ref) => {
  return (
    <>
      <Box ref={ref} height={"2xl"}>
        <Flex
          justifyContent={"center"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Text fontSize={"4xl"}>{ABOUT_ME_HEADER}</Text>
          <Flex textAlign={"center"} flexDirection={"column"}>
            <Text>{ABOUT_ME}</Text>
            <Text>{SKILLS}</Text>
            <SimpleGrid columns={2} spacing={3}>
              {Skills.map((item) => (
                <TechCard name={item.name} icon={item.icon} />
              ))}
            </SimpleGrid>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default forwardRef(About);
