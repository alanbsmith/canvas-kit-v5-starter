import * as React from "react";
import styled from "@emotion/styled";
import { createComponent, StyledType } from "@workday/canvas-kit-react/common";

import { type, TypeProps } from "./utils/type";

export type TitleProps = StyledType &
  TypeProps & {
    children?: React.ReactNode;
  };

const StyledTitle = styled("h1")<TitleProps>(
  {
    margin: 0
  },
  type
);

/** ### Title Component
 * [View Docs](https://github.com/Workday/canvas-kit/tree/master/modules/react/tokens#title)
 *
 * ---
 * `Title` is intended to be used for large page titles.
 * Its default HTML element is an `h1`.
 * It has three sizes: `small`, `medium`, and `large`.
 * Here's a quick reference for font-sizes and weights:
 *
 * - `large`: font-size: 56px (3.5rem), font-weight: bold (700)
 * - `medium`: font-size: 48px (3rem), font-weight: bold (700)
 * - `small`: font-size: 40px (2.5rem), font-weight: bold (700)
 *
 * */
export const Title = createComponent("h1")({
  displayName: "Title",
  Component: (
    { children, level = "title", size = "medium", ...props }: TitleProps,
    ref,
    Element
  ) => {
    return (
      <StyledTitle as={Element} ref={ref} level={level} size={size} {...props}>
        {children}
      </StyledTitle>
    );
  }
});
