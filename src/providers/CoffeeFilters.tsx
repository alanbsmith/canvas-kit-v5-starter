import React from 'react';

import {
  createEventMap,
  Model,
  ToModelConfig,
  useEventMap,
} from '@workday/canvas-kit-react/common';

import { Coffee } from '../types';

export type Filters = {
  roastLevel: Coffee['roastLevel'][];
};

export const filterOptions = [
  {
    displayName: 'Roast Level',
    key: 'roastLevel',
    options: [
      {
        displayName: 'Light',
        key: 'Light',
      },
      {
        displayName: 'Light-Medium',
        key: 'Light-Medium',
      },
      {
        displayName: 'Medium',
        key: 'Medium',
      },
      {
        displayName: 'Medium-Dark',
        key: 'Medium-Dark',
      },
      {
        displayName: 'Dark',
        key: 'Dark',
      },
    ],
  },
] as const;

export type FilterState = {
  filters: Filters;
};

export type FilterEvents = {
  addRoast(data: { roast: Coffee['roastLevel'] }): void;
  removeRoast(data: { roast: Coffee['roastLevel'] }): void;
};

export type FilterModel = Model<FilterState, FilterEvents>;

const filterEventMap = createEventMap<FilterEvents>()({
  guards: {
    shouldAddRoast: 'addRoast',
    shouldRemoveRoast: 'removeRoast',
  },
  callbacks: {
    onAddRoast: 'addRoast',
    onRemoveRoast: 'removeRoast',
  },
});

export type FilterConfig = {} & Partial<
  ToModelConfig<FilterState, FilterEvents, typeof filterEventMap>
>;

export const useFilterModel = (config: FilterConfig = {}) => {
  const [filters, setFilters] = React.useState<Filters>({
    roastLevel: [
      'Light',
      'Light-Medium',
      'Medium',
      'Medium-Dark',
      'Dark',
    ] as Coffee['roastLevel'][],
  });

  const state = {
    filters,
  };

  const events = useEventMap(filterEventMap, state, config, {
    addRoast(data) {
      console.log('addRoast', data.roast);
      setFilters({
        ...state.filters,
        roastLevel: [...state.filters.roastLevel, data.roast],
      });
    },
    removeRoast(data) {
      console.log('removeRoast', data.roast, state.filters.roastLevel);
      setFilters({
        ...state.filters,
        roastLevel: state.filters.roastLevel.filter((r) => r !== data.roast),
      });
    },
  });

  return { state, events };
};

export const FiltersContext = React.createContext({} as FilterModel);

export const FiltersProvider: React.FC = (props) => {
  const model = useFilterModel();

  return (
    <FiltersContext.Provider value={model}>
      {props.children}
    </FiltersContext.Provider>
  );
};

export const useFilters = () => {
  const context = React.useContext(FiltersContext);

  return context;
};
