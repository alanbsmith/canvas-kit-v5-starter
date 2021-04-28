import * as React from 'react';
import styled from '@emotion/styled';
import { createComponent, StyledType } from '@workday/canvas-kit-react/common';

import { type, TypeProps } from './utils/type';

export type TitleProps = StyledType &
  TypeProps & {
    children?: React.ReactNode;
  };

const StyledTitle = styled('h1')<TitleProps>(
  {
    margin: 0,
  },
  type
);

/**
 * Intended to be used for large page titles.
 * Default HTML element is an `h1`
 * - `large`: rem(56px)
 * - `medium`: rem(48px)
 * - `small`: rem(40px)
 */
export const Title = createComponent('h1')({
  displayName: 'Title',
  Component: (
    { children, level = 'title', size = 'medium', ...props }: TitleProps,
    ref,
    Element
  ) => {
    return (
      <StyledTitle as={Element} ref={ref} level={level} size={size} {...props}>
        {children}
      </StyledTitle>
    );
  },
});
