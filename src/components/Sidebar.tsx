import * as React from "react";

import { Box, BoxProps } from "@workday/canvas-kit-labs-react/common";

export const Sidebar = ({ children, ...props }: BoxProps) => {
  return (
    <Box
      as="aside"
      minWidth={400}
      borderRight="solid 1px"
      borderRightColor="soap400"
      padding="xl"
      {...props}
    >
      {children}
    </Box>
  );
};
