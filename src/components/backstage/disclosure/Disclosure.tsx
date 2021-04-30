import React from 'react';
import { createComponent } from '@workday/canvas-kit-react/common';
import { DisclosureTarget } from './DisclosureTarget';
import { DisclosureContent } from './DisclosureContent';

import {
  DisclosureConfig,
  DisclosureModel,
  useDisclosureModel,
} from './useDisclosureModel';

export interface DisclosureProps extends DisclosureConfig {
  children: React.ReactNode;
}

export const DisclosureModelContext = React.createContext(
  {} as DisclosureModel
);

export const Disclosure = createComponent()({
  displayName: 'Disclosure',
  Component: ({ children, ...config }: DisclosureProps) => {
    const model = useDisclosureModel(config);

    return (
      <DisclosureModelContext.Provider value={model}>
        {children}
      </DisclosureModelContext.Provider>
    );
  },
  subComponents: {
    Target: DisclosureTarget,
    Content: DisclosureContent,
  },
});
