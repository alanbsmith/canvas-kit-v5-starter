import * as React from 'react';

import data from '../data/staff-favorites.json';
import { Coffee } from '../types';

export type StaffFavoritesContextType = {
  coffee: Coffee[];
};

export const StaffFavoritesContext = React.createContext(
  {} as StaffFavoritesContextType
);

export const StaffFavoritesProvider: React.FC = (props) => {
  const value = {
    coffee: data,
  } as StaffFavoritesContextType;

  return (
    <StaffFavoritesContext.Provider value={value}>
      {props.children}
    </StaffFavoritesContext.Provider>
  );
};

export const useStaffFavorites = () => {
  const context = React.useContext(StaffFavoritesContext);
  if (!context) {
    throw new Error(`useAlerts must be used within a StaffFavoritesContext`);
  }

  return context;
};
