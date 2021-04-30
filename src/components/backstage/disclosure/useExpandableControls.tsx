import { mergeProps } from '@workday/canvas-kit-react/common';
import { DisclosureModel } from './useDisclosureModel';

export const useExpandableControls = (
  { state }: DisclosureModel,
  elemProps: {}
) => {
  return mergeProps(
    {
      'aria-controls': state.id,
      'aria-expanded': state.visible,
    },
    elemProps
  );
};
