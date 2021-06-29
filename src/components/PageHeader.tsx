import * as React from "react";
import { gradients } from "@workday/canvas-kit-react/tokens";

import { Box, BoxProps } from "@workday/canvas-kit-labs-react/common";
import { Heading, HeadingProps } from "./common/type";

export const PageHeader = ({ children, ...props }: BoxProps) => {
  return (
    <Box
      as="header"
      paddingX="xl"
      paddingY="m"
      backgroundImage={gradients.blueberry}
      {...props}
    >
      {children}
    </Box>
  );
};

PageHeader.Heading = (props: HeadingProps) => {
  return (
    <Heading as="h1" fontWeight="regular" variant="inverse" {...props}>
      {props.children}
    </Heading>
  );
};
