import * as React from "react";
import { CanvasProvider, styled } from "@workday/canvas-kit-react/common";
import { Global, css } from "@emotion/react";
import { type } from "@workday/canvas-kit-react/tokens";

import { fonts } from "@workday/canvas-kit-react-fonts";

// Applies font styles
const FontContainer = styled("div")(...fonts, {
  ...type.levels.body.small,
  minHeight: "100vh"
});

const globalStyles = `
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
`;

export const App: React.FC = (props) => {
  return (
    <CanvasProvider>
      <FontContainer>
        <Global styles={css(globalStyles)} />
        {props.children}
      </FontContainer>
    </CanvasProvider>
  );
};
