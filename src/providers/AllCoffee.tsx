import * as React from 'react';

import data from '../data/all-coffee.json';
import { Coffee } from '../types';

export type AllCoffeeContextType = {
  coffee: Coffee[];
};

export const AllCoffeeContext = React.createContext({} as AllCoffeeContextType);

export const AllCoffeeProvider: React.FC = (props) => {

  const value = {
    coffee: data,
  } as AllCoffeeContextType;

  return <AllCoffeeContext.Provider value={value}>{props.children}</AllCoffeeContext.Provider>
}

export const useAllCoffee = () => {
  const context = React.useContext(AllCoffeeContext);
  if (!context) {
    throw new Error(`useAlerts must be used within a AllCoffeeContext`);
  }

  return context;
}
