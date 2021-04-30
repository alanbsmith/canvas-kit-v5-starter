import * as React from 'react';

import { Tabs, useTabsModel } from '@workday/canvas-kit-labs-react/tabs';

import { useAllCoffee } from '../../providers/AllCoffee';
// import { Tabs } from '../../components/backstage/Tabs';
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

  const tabsModel = useTabsModel({
    onActivate: ({ data, prevState }) =>
      console.log('onActivate', data, prevState),

    shouldActivate: ({ data }) => data.tab !== 'alan',
  });

  return (
    <Tabs
      model={tabsModel}

      // shouldActivate={({ data }) => data.tab !== 'alan'}
    >
      <Tabs.List as="section">
        <Tabs.Item name="all">All</Tabs.Item>
        <Tabs.Item name="popular">Popular</Tabs.Item>
        <Tabs.Item name="new">New & Interesting</Tabs.Item>
        <Tabs.Item name="alan">Staff Favorites</Tabs.Item>
      </Tabs.List>

      <Tabs.Panel name="all">
        <CoffeeList coffee={coffee} />
      </Tabs.Panel>
      <Tabs.Panel name="popular">
        <CoffeeList coffee={popularCoffee} />
      </Tabs.Panel>
      <Tabs.Panel name="new">
        <CoffeeList coffee={newCoffee} />
      </Tabs.Panel>
      <Tabs.Panel name="alan" data-test-id="alan">
        <CoffeeList coffee={staffCoffee} />
      </Tabs.Panel>
    </Tabs>
  );
};
