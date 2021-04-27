import * as React from "react";
import styled from "@emotion/styled";
import {createComponent, StyledType} from '@workday/canvas-kit-react/common';

import { type, TypeProps } from './utils/type';

export type DetailProps = StyledType & TypeProps & {
  children?: React.ReactNode;
};

const StyledDetail = styled('span')<DetailProps>({
  margin: 0,
}, type);

/**
 * Intended to be used for small detail content or in tight spaces.
 * - `l`: rem(14px)
 * - `m`: rem(12px)
 * - `s`: rem(10px)
 */
export const Detail = createComponent('span')({
  displayName: 'Detail',
  Component: ({ children, level = 'detail', size = 'medium', ...props}: DetailProps, ref, Element) => {
    return (
      <StyledDetail as={Element} ref={ref} level={level} size={size} {...props}>{children}</StyledDetail>
    );
  }
});
