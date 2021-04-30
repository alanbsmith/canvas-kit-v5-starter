import { Model, useUniqueId } from '@workday/canvas-kit-react/common';

export type IDState = {
  id: string;
};

export type IDEvents = {};

export type IDModel = Model<IDState, IDEvents>;

export type IDConfig = {
  id?: string;
};

export const useIDModel = (config: IDConfig = {}) => {
  const id = useUniqueId(config.id);

  const state = {
    id,
  };

  const events = {};

  return { state, events };
};
