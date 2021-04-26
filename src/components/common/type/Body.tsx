import * as React from "react";
import styled from "@emotion/styled";
import {createComponent, StyledType} from '@workday/canvas-kit-react/common';

import { type, TypeProps } from './utils/type';

export type BodyProps = StyledType & TypeProps & {
  children?: React.ReactNode;
};

const StyledBody = styled('span')<BodyProps>({
  margin: 0,
}, type);

/**
 * Intended to be used for standard body text.
 * Default HTML element is a `span`
 * - `large`: rem(20px)
 * - `medium`: rem(18px)
 * - `small`: rem(16px)
 */
export const Body = createComponent('span')({
  displayName: 'Body',
  Component: ({ children, level = 'body', size = 'medium', ...props}: BodyProps, ref, Element) => {
    return (
      <StyledBody as={Element} ref={ref} {...props}>{children}</StyledBody>
    );
  }
});
