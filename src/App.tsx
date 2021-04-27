import * as React from 'react';
import {CanvasProvider, styled } from '@workday/canvas-kit-react/common';
import { Global, css } from '@emotion/react';
import {fontFamily} from '@workday/canvas-kit-react/tokens';
import { type } from '@workday/canvas-kit-labs-react/tokens';
import { fonts } from "@workday/canvas-kit-react-fonts";

import { Flex } from './components/common/layout/Flex';
import { PageHeader } from './components/PageHeader';
import { Sidebar } from './components/Sidebar';

// Applies font styles
const FontContainer = styled("div")(...fonts, {
  fontFamily,
  ...type.body,
  minHeight: '100vh',
});

const globalStyles = (`
  html {
    min-height: 100vh;
  };
  body {
    margin: 0;
    min-height: 100vh;
  };
 #root {
    min-height: 100vh;
  }
`);

export const App: React.FC = (props) => {
  return (
    <CanvasProvider>
      <FontContainer>
        <Global styles={css(globalStyles)} />
        <PageHeader>
          <PageHeader.Heading>
            Canvas Coffee Roasters
          </PageHeader.Heading>
        </PageHeader>
        <Flex minHeight="100vh">
          <Sidebar>
          </Sidebar>
          {props.children}
        </Flex>
      </FontContainer>
    </CanvasProvider>
  );
}
