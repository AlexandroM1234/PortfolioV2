import React from "react";
import {
  Card,
  Stack,
  Heading,
  Text,
  Tag,
  TagLabel,
  CardBody,
  Image,
} from "@chakra-ui/react";

const ExperienceCard = ({ job }) => {
  const { employer, role, date, location, desc, logo, stack } = job;
  return (
    <Card direction={"row"} overflow="hidden" variant="outline">
      <Image
        maxW={{ base: "100%", sm: "200px" }}
        src={logo}
        alt={`${employer} logo`}
      />

      <Stack>
        <CardBody width={"3xl"}>
          <Heading size="md">{employer}</Heading>
          <Heading size="sm">{role}</Heading>
          <Heading size="sm">{date}</Heading>
          <Heading size="sm">{location}</Heading>
          <Text py="2">{desc}</Text>
          {stack.map((tech) => (
            <Tag size="md" margin={1} borderRadius="full">
              <TagLabel>{tech}</TagLabel>
            </Tag>
          ))}
        </CardBody>
      </Stack>
    </Card>
  );
};

export default ExperienceCard;
