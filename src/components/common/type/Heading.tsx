import * as React from "react";
import styled from "@emotion/styled";
import { createComponent, StyledType } from "@workday/canvas-kit-react/common";

import { type, TypeProps } from "./utils/type";

export type HeadingProps = StyledType &
  TypeProps & {
    children?: React.ReactNode;
  };

const StyledHeading = styled("h2")<HeadingProps>(
  {
    margin: 0
  },
  type
);

/**
 * ### Heading Component
 * [View Docs](https://github.com/Workday/canvas-kit/tree/master/modules/react/tokens#heading)
 *
 * ---
 * `Heading` is intended to be used for headings and large text.
 * Its default HTML element is an `h2`.
 * It has three sizes: `small`, `medium`, and `large`.
 * Here's a quick reference for font-sizes and weights:
 *
 * - `large`: font-size: 32px (2rem), font-weight: bold (700)
 * - `medium`: font-size: 28px (1.75rem), font-weight: bold (700)
 * - `small`: font-size: 24px (1.5rem), font-weight: bold (700)
 *
 */
export const Heading = createComponent("h2")({
  displayName: "Heading",
  Component: (
    { children, level = "heading", size = "medium", ...props }: HeadingProps,
    ref,
    Element
  ) => {
    return (
      <StyledHeading
        as={Element}
        level={level}
        ref={ref}
        size={size}
        {...props}
      >
        {children}
      </StyledHeading>
    );
  }
});
