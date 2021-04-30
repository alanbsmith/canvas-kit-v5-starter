import React from 'react';
import { createComponent, mergeProps } from '@workday/canvas-kit-react/common';
import { DisclosureModelContext } from './Disclosure';
import { useExpandableControls } from './useExpandableControls';

export interface DisclosureTargetProps {
  children: React.ReactNode;
}

export const DisclosureTarget = createComponent('button')({
  displayName: 'Disclosure.Target',
  Component: (
    { children, ...elemProps }: DisclosureTargetProps,
    ref,
    Element
  ) => {
    const model = React.useContext(DisclosureModelContext);
    const props = mergeProps(
      {
        onClick() {
          if (model.state.visible) {
            model.events.hide();
          } else {
            model.events.show();
          }
        },
      },
      useExpandableControls(model, elemProps)
    );

    return (
      <Element ref={ref} {...props}>
        {children}
      </Element>
    );
  },
});
