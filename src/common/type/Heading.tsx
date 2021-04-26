import * as React from "react";
import styled from "@emotion/styled";
import {createComponent, StyledType} from '@workday/canvas-kit-react/common';

import { type, TypeProps } from './utils/type';

export type HeadingProps = StyledType & TypeProps & {
  children?: React.ReactNode;
};

const StyledHeading = styled('h2')<HeadingProps>({
  margin: 0,
}, type);

/**
 * Intended to be used for headings and large text.
 * Default HTML element is an `h2`
 * - `large`: rem(32px)
 * - `medium`: rem(28px)
 * - `small`: rem(24px)
 */
export const Heading = createComponent('h2')({
  displayName: 'Heading',
  Component: ({ children, level = 'heading', size = 'medium', ...props}: HeadingProps, ref, Element) => {
    return (
      <StyledHeading as={Element} ref={ref} {...props}>{children}</StyledHeading>
    );
  }
});
