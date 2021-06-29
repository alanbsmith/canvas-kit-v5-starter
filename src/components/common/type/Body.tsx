import * as React from "react";
import styled from "@emotion/styled";
import { createComponent, StyledType } from "@workday/canvas-kit-react/common";

import { type, TypeProps } from "./utils/type";

export type BodyProps = StyledType &
  TypeProps & {
    children?: React.ReactNode;
  };

const StyledBody = styled("p")<BodyProps>(
  {
    margin: 0
  },
  type
);

/**
 * ### Body Component
 * [View Docs](https://github.com/Workday/canvas-kit/tree/master/modules/react/tokens#body)
 *
 * ---
 * `Body` is intended to be used for headings and large text.
 * Its default HTML element is `p`.
 * It has three sizes: `small`, `medium`, and `large`.
 * Here's a quick reference for font-sizes and weights:
 *
 * Here's a quick reference for font-sizes and weights:
 *
 * - `large`: font-size: 20px (1.25rem), font-weight: regular (400)
 * - `medium`: font-size: 18px (1.125rem), font-weight: regular (400)
 * - `small`: font-size: 16px (1rem), font-weight: regular (400)
 *
 */
export const Body = createComponent("p")({
  displayName: "Body",
  Component: (
    { children, level = "body", size = "medium", ...props }: BodyProps,
    ref,
    Element
  ) => {
    return (
      <StyledBody as={Element} ref={ref} level={level} size={size} {...props}>
        {children}
      </StyledBody>
    );
  }
});
