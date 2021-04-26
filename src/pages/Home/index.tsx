import * as React from 'react';

import { useAllCoffee } from '../../providers/AllCoffee';
import { Title, Heading, Body } from "../../common/type";
import { Flex } from '../../common/layout';

export const Home: React.FC = () => {
  const { coffee } = useAllCoffee();
  return (
      <Flex flexDirection="column">
        <Title>Hello, Canvas Kit Workshop!</Title>
        <Body>Coffee Count: {coffee.length}</Body>
        <Flex flexWrap="wrap">
          {coffee.map(c => (
            <Flex padding="s" border="solid 1px" margin="xs" flexBasis="240px" flexDirection="column">
              <Heading as="h3" size="small">{c.name}</Heading>
              <Body>{c.flavorProfile}</Body>
            </Flex>
          ))}
        </Flex>
        
      </Flex>
  );
}
