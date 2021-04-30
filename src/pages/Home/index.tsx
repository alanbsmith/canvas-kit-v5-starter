import * as React from 'react';

import { useAllCoffee } from '../../providers/AllCoffee';
import { useFilters } from '../../providers/CoffeeFilters';
import { Tabs, useTabsModel } from '@workday/canvas-kit-labs-react/tabs';
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
  const filterModel = useFilters();
  const filteredCoffee = coffee.filter((c) =>
    filterModel.state.filters.roastLevel.includes(c.roastLevel)
  );
  const [newCoffee, popularCoffee, staffCoffee] = splitCoffee(filteredCoffee);

  const model = useTabsModel();

  const coffees: Record<string, Coffee[]> = {
    all: filteredCoffee,
    popular: popularCoffee,
    new: newCoffee,
    alan: staffCoffee,
  };

  return (
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
  );
};
