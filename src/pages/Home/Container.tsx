import * as React from 'react';

import { AllCoffeeProvider } from '../../providers/AllCoffee';

import { Home } from './index';

export const HomeContainer: React.FC = () => {
  return (
    <AllCoffeeProvider>
      <Home />
    </AllCoffeeProvider>
  );
}
