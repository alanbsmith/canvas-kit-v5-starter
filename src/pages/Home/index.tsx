import * as React from "react";

import { useAllCoffee } from "../../providers/AllCoffee";
import { Heading, Body } from "../../components/common/type";
import { Flex } from "@workday/canvas-kit-labs-react/layout";

export const Home: React.FC = () => {
  const { coffee } = useAllCoffee();
  return (
    <Flex flexDirection="column">
      <Heading>Hello, Canvas Kit Workshop!</Heading>
      <Body>Coffee Count: {coffee.length}</Body>
    </Flex>
  );
};
