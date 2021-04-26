import * as React from 'react';

import data from '../data/new-and-interesting.json';
import { Coffee } from '../types';

export type NewAndInterestingContextType = {
  coffee: Coffee[];
};

export const NewAndInterestingContext = React.createContext({} as NewAndInterestingContextType);

export const NewAndInterestingProvider: React.FC = (props) => {

  const value = {
    coffee: data,
  } as NewAndInterestingContextType;

  return <NewAndInterestingContext.Provider value={value}>{props.children}</NewAndInterestingContext.Provider>
}

export const useNewAndInteresting = () => {
  const context = React.useContext(NewAndInterestingContext);
  if (!context) {
    throw new Error(`useAlerts must be used within a NewAndInterestingContext`);
  }

  return context;
}
