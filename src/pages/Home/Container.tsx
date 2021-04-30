import * as React from 'react';

import { HStack, VStack } from '../../components/common/layout/Stack';
import { Sidebar } from '../../components/Sidebar';

import { AllCoffeeProvider } from '../../providers/AllCoffee';

import { Home } from './index';
import { HomeSidebar } from './HomeSidebar';
import { FiltersProvider } from '../../providers/CoffeeFilters';

export const HomeContainer: React.FC = () => {
  return (
    <AllCoffeeProvider>
      <FiltersProvider>
        <HStack spacing={32}>
          <Sidebar>
            <HomeSidebar />
          </Sidebar>
          <VStack spacing={0}>
            <Home />
          </VStack>
        </HStack>
      </FiltersProvider>
    </AllCoffeeProvider>
  );
};
