import React from 'react';
import { createComponent } from '@workday/canvas-kit-react/common';
import { DisclosureModelContext } from './Disclosure';
import { useHidden } from './useHidden';

export interface DisclosureContentProps {
  children: React.ReactNode;
}

export const DisclosureContent = createComponent('div')({
  displayName: 'Disclosure.Content',
  Component: (
    { children, ...elemProps }: DisclosureContentProps,
    ref,
    Element
  ) => {
    const model = React.useContext(DisclosureModelContext);
    const props = useHidden(model, elemProps);

    return (
      <Element ref={ref} id={model.state.id} {...props}>
        {children}
      </Element>
    );
  },
});
