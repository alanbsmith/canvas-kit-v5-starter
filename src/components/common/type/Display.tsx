import * as React from 'react';
import styled from '@emotion/styled';
import { createComponent, StyledType } from '@workday/canvas-kit-react/common';

import { type, TypeProps } from './utils/type';

export type DisplayProps = StyledType &
  TypeProps & {
    children?: React.ReactNode;
  };

const StyledDisplay = styled('h2')<DisplayProps>(
  {
    margin: 0,
  },
  type
);

/**
 * Intended for use in large heroes and images.
 * Default HTML element is an `h2`
 * - `large`: rem(96px)
 * - `medium`: rem(80px)
 * - `small`: rem(64px)
 */
export const Display = createComponent('h2')({
  displayName: 'Display',
  Component: (
    { children, level = 'display', size = 'medium', ...props }: DisplayProps,
    ref,
    Element
  ) => {
    return (
      <StyledDisplay
        as={Element}
        ref={ref}
        level={level}
        size={size}
        {...props}
      >
        {children}
      </StyledDisplay>
    );
  },
});
