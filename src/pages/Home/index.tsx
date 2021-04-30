import * as React from 'react';

import { useAllCoffee } from '../../providers/AllCoffee';
import { Tabs, useTabsModel } from '@workday/canvas-kit-labs-react/tabs';
import { Button } from '@workday/canvas-kit-react/button';
import { Flex } from '../../components/common/layout';
import { Card } from '../../components/Card';
import { Coffee } from '../../types';
import { splitCoffee } from '../../data/utils';

type CoffeeProps = {
  coffee: Coffee[];
};

const CoffeeList: React.FC<CoffeeProps> = ({ coffee }) => {
  return (
    <Flex as="main" flexDirection="column" flex={1} padding={0}>
      <Flex flexWrap="wrap" alignItems="flex-start">
        {coffee.map((brew) => (
          <Card key={brew.id}>
            <Card.Image type={brew.img} alt={`${brew.name} coffee bag`} />

            <Card.Content>
              <Card.Heading>{brew.name}</Card.Heading>
              <Card.Body>{brew.flavorProfile}</Card.Body>

              <Card.Detail>
                ${brew.price} | {brew.bagWeight} oz.
              </Card.Detail>
            </Card.Content>
          </Card>
        ))}
      </Flex>
    </Flex>
  );
};

export const Home: React.FC = () => {
  const { coffee } = useAllCoffee();
  const [newCoffee, popularCoffee, staffCoffee] = splitCoffee(coffee);

  const model = useTabsModel();

  const coffees: Record<string, Coffee[]> = {
    all: coffee,
    popular: popularCoffee,
    new: newCoffee,
    alan: staffCoffee,
  };

  return (
    <>
      <Button onClick={() => model.events.activate({ tab: 'alan' })}>
        Activate Staff Favorites
      </Button>
      {model.state.activeTab}
      <Tabs model={model}>
        <Tabs.List>
          <Tabs.Item name="all" aria-controls="my-panel">
            All
          </Tabs.Item>
          <Tabs.Item name="popular" aria-controls="my-panel">
            Popular
          </Tabs.Item>
          <Tabs.Item name="new" aria-controls="my-panel">
            New & Interesting
          </Tabs.Item>
          <Tabs.Item name="alan" aria-controls="my-panel">
            Staff Favorites
          </Tabs.Item>
        </Tabs.List>

        <Tabs.Panel hidden={undefined} id="my-panel">
          <CoffeeList coffee={coffees[model.state.activeTab] || []} />
        </Tabs.Panel>
      </Tabs>
    </>
  );
};
