import * as React from 'react';
import { createComponent, StyledType } from '@workday/canvas-kit-react/common';

import { Box, BoxProps } from './common/primitives';
import { ImageType } from '../types';

import blackberry from '../assets/coffee-bag-blackberry.svg';
import blueberry from '../assets/coffee-bag-blueberry.svg';
import cantaloupe from '../assets/coffee-bag-cantaloupe.svg';
import chiliMango from '../assets/coffee-bay-chili-mango.svg';
import cinnamon from '../assets/coffee-bag-cinnamon.svg';
import greenApple from '../assets/coffee-bag-green-apple.svg';
import sourLemon from '../assets/coffee-bag-sour-lemon.svg';
import watermelon from '../assets/coffee-bag-watermelon.svg';

const imageTypes = {
  blackberry,
  blueberry,
  cantaloupe,
  chiliMango,
  cinnamon,
  greenApple,
  sourLemon,
  watermelon,
};

export type ImageProps = StyledType &
  BoxProps & {
    alt: string;
    type: ImageType;
  };

export const Image = createComponent('img')<ImageProps>({
  displayName: 'Image',
  Component: ({ type, ...props }: ImageProps, ref, Element) => {
    const imgSrc = imageTypes[type];
    return <Box as={Element} ref={ref} src={imgSrc} {...props} />;
  },
});
