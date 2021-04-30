import { mergeProps } from '@workday/canvas-kit-react/common';
import { DisclosureModel } from './useDisclosureModel';

export const useHidden = ({ state }: DisclosureModel, elemProps: {}) => {
  return mergeProps(
    {
      hidden: state.visible ? undefined : true,
    },
    elemProps
  );
};
