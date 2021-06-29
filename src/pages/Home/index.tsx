import * as React from "react";

import { useAllCoffee } from "../../providers/AllCoffee";
import { Flex } from "@workday/canvas-kit-labs-react/layout";

import { Card } from "../../components/Card";

export const Home: React.FC = () => {
  const { coffee } = useAllCoffee();
  return (
    <Flex as="main" flexDirection="column" flex={1} padding="xl">
      <Flex flexWrap="wrap" alignItems="flex-start">
        {coffee.map((brew) => (
          <Card key={brew.id}>
            <Card.Image type={brew.img} alt={`${brew.name} coffee bag`} />
            <Card.Content>
              <Card.Heading>{brew.name}</Card.Heading>
              <Card.Body>{brew.flavorProfile}</Card.Body>
              <Card.Subtext>
                ${brew.price} | {brew.bagWeight} oz.
              </Card.Subtext>
            </Card.Content>
          </Card>
        ))}
      </Flex>
    </Flex>
  );
};
