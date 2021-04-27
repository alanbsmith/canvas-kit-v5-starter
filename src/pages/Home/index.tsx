import * as React from 'react';

import { useAllCoffee } from '../../providers/AllCoffee';
import { Title, Body } from "../../components/common/type";
import { Flex } from '../../components/common/layout';

export const Home: React.FC = () => {
  const { coffee } = useAllCoffee();
  return (
      <Flex as="main" flexDirection="column" flex={1} padding="xl">
        <Title>Hello, Canvas Kit Workshop!</Title>
        <Body>Coffee Count: {coffee.length}</Body>
      </Flex>
  );
}
