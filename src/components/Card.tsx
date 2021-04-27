import * as React from "react";

import {
  Flex,
  FlexProps,
  Stack,
  StackProps,
  SpacingValue
} from "./common/layout";
import { Body, BodyProps, Detail, DetailProps } from "./common/type";
import { Image, ImageProps } from "./Image";

export const Card = ({ children, ...props }: FlexProps) => {
  return (
    <Flex
      margin="s"
      flexDirection="column"
      flexBasis="240px"
      alignSelf="stretch"
      flexGrow={0}
      padding="l"
      depth={2}
      backgroundColor="frenchVanilla100"
      {...props}
    >
      {children}
    </Flex>
  );
};

Card.Image = ({ type, alt }: ImageProps) => {
  return (
    <Image
      height="100%"
      padding="s"
      type={type}
      alt={alt}
    />
  );
}

type CardContent = Omit<StackProps, 'spacing'> & {
  spacing?: SpacingValue;
}

Card.Content = ({ children, spacing = "xxs", ...props }: CardContent) => {
  return (
    <Stack spacing={spacing} flexDirection="column" {...props}>
      {children}
    </Stack>
  );
}

Card.Heading = ({ children, ...props}: BodyProps) => {
  return (
    <Body as="h3" fontWeight="bold" size="large" {...props}>{children}</Body>
  )
}

Card.Body = ({ children, ...props}: BodyProps) => {
  return (
    <Body  {...props}>{children}</Body>
  )
}

Card.Detail = ({ children, ...props}: DetailProps) => {
  return (
    <Detail size="large" variant="hint" {...props}>{children}</Detail>
  )
}
