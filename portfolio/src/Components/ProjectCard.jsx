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
  Link,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const ProjectCard = ({ project }) => {
  const { name, desc, date, img, url, stack } = project;
  return (
    <>
      <Card direction={"row"} variant="outline" marginY={4}>
        <Image
          maxW={{ base: "0", sm: "200px" }}
          src={img}
          alt="Project screenshot"
        />

        <CardBody width={["sm", "lg", "3xl"]}>
          <Heading size="md">
            <Link href={url} isExternal target="_blank">
              {name} <ExternalLinkIcon mx={"2px"} />
            </Link>
          </Heading>
          <Heading size="sm">{date}</Heading>
          <Text py="2">{desc}</Text>
          {stack.map((tech, idx) => (
            <Tag key={idx} size="md" margin={1} borderRadius="full">
              <TagLabel>{tech}</TagLabel>
            </Tag>
          ))}
        </CardBody>
      </Card>
    </>
  );
};

export default ProjectCard;
