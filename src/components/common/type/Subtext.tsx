import * as React from "react";
import styled from "@emotion/styled";
import { createComponent, StyledType } from "@workday/canvas-kit-react/common";

import { type, TypeProps } from "./utils/type";

export type SubtextProps = StyledType &
  TypeProps & {
    children?: React.ReactNode;
  };

const StyledSubtext = styled("span")<SubtextProps>(
  {
    margin: 0
  },
  type
);

/** ### Subtext Component
 * * [View Docs](https://github.com/Workday/canvas-kit/tree/master/modules/react/tokens#subtext)
 *
 * ---
 * The `subtext` is intended to be used for small subtext content or in tight spaces.
 * It has three sizes: `small`, `medium`, and `large`.
 * Here's a quick reference for font-sizes and weights:
 *
 * - `large`: font-size: 14px (0.875rem), font-weight: regular (400)
 * - `medium`: font-size: 12px (0.75rem), font-weight: regular (400)
 * - `small`: font-size: 10px (0.625rem), font-weight: regular (400)
 *
 * */
export const Subtext = createComponent("span")({
  displayName: "Subtext",
  Component: (
    { children, level = "subtext", size = "medium", ...props }: SubtextProps,
    ref,
    Element
  ) => {
    return (
      <StyledSubtext
        as={Element}
        ref={ref}
        level={level}
        size={size}
        {...props}
      >
        {children}
      </StyledSubtext>
    );
  }
});
