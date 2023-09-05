import { Flex, Text, Icon } from "@chakra-ui/react";
import React from "react";

const TechCard = ({ name, icon }) => {
  return (
    <>
      <Flex
        justifyContent={"flex-start"}
        border={"1px"}
        borderColor={"gray"}
        padding={4}
        borderRadius={10}
        alignItems={"center"}
      >
        <Icon as={icon} boxSize={10} />
        <Text size={"m"} marginLeft={3}>
          {name}
        </Text>
      </Flex>
    </>
  );
};

export default TechCard;
