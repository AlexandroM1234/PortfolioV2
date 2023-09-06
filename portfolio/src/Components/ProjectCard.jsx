import React from "react";
import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  TagLabel,
  Tag,
} from "@chakra-ui/react";

const ProjectCard = ({ project }) => {
  const { name, desc, date, img, url, stack } = project;
  return (
    <>
      <Card direction={"row"} variant="outline" zIndex={0}>
        <Image
          maxW={{ base: "100%", sm: "200px" }}
          src={img}
          alt="Project screenshot"
        />

        <Stack>
          <CardBody width={"3xl"}>
            <Heading size="md">{name}</Heading>
            <Heading size="sm">{date}</Heading>
            <Text py="2">{desc}</Text>
            {stack.map((tech) => (
              <Tag size="md" margin={1} borderRadius="full">
                <TagLabel>{tech}</TagLabel>
              </Tag>
            ))}
          </CardBody>
        </Stack>
      </Card>
    </>
  );
};

export default ProjectCard;
