import { Text, Icon, Card } from "@chakra-ui/react";
import React from "react";

const TechCard = ({ name, icon }) => {
  return (
    <>
      <Card
        justifyContent={"center"}
        direction={"row"}
        border={"1px"}
        borderColor={"gray"}
        padding={3}
        borderRadius={10}
        alignItems={"center"}
        variant={"outline"}
        zIndex={"-1"}
      >
        <Icon as={icon} boxSize={10} />
        <Text size={"sm"} marginLeft={2}>
          {name}
        </Text>
      </Card>
    </>
  );
};

export default TechCard;
