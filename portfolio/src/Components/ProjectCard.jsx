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
      <Card direction={"row"} variant="outline" zIndex={-1}>
        <Image
          maxW={{ base: "100%", sm: "200px" }}
          src={img}
          alt="Project screenshot"
        />

        <Stack>
          <CardBody width={"3xl"}>
            <Heading size="md">
              <Link href={url} isExternal>
                {name} <ExternalLinkIcon mx={"2px"} />
              </Link>
            </Heading>
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
