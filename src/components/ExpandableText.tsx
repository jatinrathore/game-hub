import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;
  const summary = expanded ? children : children.substring(0, limit) + "...";

  if (!children) return null;

  return (
    <>
      <Text>
        {summary}
        <Button
          onClick={() => setExpanded(!expanded)}
          marginLeft={1}
          size={"xs"}
          colorScheme="yellow"
        >
          {expanded ? "Show less" : "Read more"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
