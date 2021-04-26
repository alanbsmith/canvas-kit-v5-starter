import * as React from 'react';

import data from '../data/popular.json';
import { Coffee } from '../types';

export type PopularContextType = {
  coffee: Coffee[];
};

export const PopularContext = React.createContext({} as PopularContextType);

export const PopularProvider: React.FC = (props) => {

  const value = {
    coffee: data,
  } as PopularContextType;

  return <PopularContext.Provider value={value}>{props.children}</PopularContext.Provider>
}

export const usePopular = () => {
  const context = React.useContext(PopularContext);
  if (!context) {
    throw new Error(`useAlerts must be used within a PopularContext`);
  }

  return context;
}
