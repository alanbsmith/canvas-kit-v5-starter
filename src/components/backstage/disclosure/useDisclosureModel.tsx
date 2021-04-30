import React from 'react';

import {
  createEventMap,
  Model,
  ToModelConfig,
  useEventMap,
} from '@workday/canvas-kit-react/common';

import { IDState, IDConfig, useIDModel } from './useIDModel';

export type DisclosureState = IDState & {
  visible: boolean;
};

export type DisclosureEvents = {
  show(): void;
  hide(): void;
};

export type DisclosureModel = Model<DisclosureState, DisclosureEvents>;

const disclosureEventMap = createEventMap<DisclosureEvents>()({
  guards: {
    shouldShow: 'show',
    shouldHide: 'hide',
  },
  callbacks: {
    onShow: 'show',
    onHide: 'hide',
  },
});

export type DisclosureConfig = IDConfig & {
  initialVisible?: boolean;
} & Partial<
    ToModelConfig<DisclosureState, DisclosureEvents, typeof disclosureEventMap>
  >;

export const useDisclosureModel = (config: DisclosureConfig = {}) => {
  const [visible, setVisible] = React.useState(config.initialVisible || false);
  const idModel = useIDModel(config);

  const state = {
    ...idModel.state,
    visible,
  };

  const events = useEventMap(disclosureEventMap, state, config, {
    show() {
      setVisible(true);
    },
    hide() {
      setVisible(false);
    },
  });

  return { state, events };
};
