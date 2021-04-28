import * as React from 'react';

import { Box } from './common/primitives/Box';

export const Sidebar: React.FC = ({ children }) => {
  return (
    <Box
      as="aside"
      minWidth={400}
      borderRight="solid 1px"
      borderRightColor="soap400"
      padding="xl"
    >
      {children}
    </Box>
  );
};
