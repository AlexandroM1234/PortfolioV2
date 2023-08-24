import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  Image,
} from "@chakra-ui/react";
import React from "react";

function Projects() {
  return (
    <>
      <Box height={"2xl"}>
        <Flex justifyContent={"center"}>
          <Text fontSize={"4xl"}>Projects</Text>
        </Flex>
        <Box>
          <SimpleGrid marginY={"2"} justifyContent={"center"}>
            <Card marginY={"2"}>
              <CardHeader>
                <Heading size={"md"}>Project 1</Heading>
              </CardHeader>
              <CardBody>
                <Text>Place Image here</Text>
                <Image src="" alt="temp image"></Image>
                <Text>Project 1 Desc</Text>
              </CardBody>
            </Card>
            <Card marginY={"2"}>
              <CardHeader>
                <Heading size={"md"}>Project 1</Heading>
              </CardHeader>
              <CardBody>
                <Text>Place Image here</Text>
                <Image src="" alt="temp image"></Image>
                <Text>Project 1 Desc</Text>
              </CardBody>
            </Card>
            <Card margin={"2"}>
              <CardHeader>
                <Heading size={"md"}>Project 1</Heading>
              </CardHeader>
              <CardBody>
                <Text>Place Image here</Text>
                <Image src="" alt="temp image"></Image>
                <Text>Project 1 Desc</Text>
              </CardBody>
            </Card>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}

export default Projects;
